import { Component, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { catchError, map, takeUntil } from 'rxjs/operators';
import { Post } from '../shared/models/post';
import { ApiDataService } from '../shared/services/api-data.service';

@Component({
  selector: 'app-posts-section',
  templateUrl: './posts-section.component.html',
  styleUrls: ['./posts-section.component.scss'],
})
export class PostsSectionComponent implements OnInit {
  @Output() posts: Post[];
  private destroy$: Subject<void> = new Subject<void>();
  constructor(private apiService: ApiDataService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.apiService
      .getPosts()
      .pipe(
        takeUntil(this.destroy$),
        catchError((error) => {
          throw 'Error in source. Details: ' + error;
        })
      )
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  updatePostItem(post) {
    debugger;
    this.apiService
      .getPost(post.id)
      .pipe(
        takeUntil(this.destroy$),
        catchError((error) => {
          throw 'Error in source. Details: ' + error;
        })
      )
      .subscribe((post) => {
        this.posts[post.id - 1].title = post.title;
        this.posts[post.id - 1].body = post.body;
        this.toastr.info('Successfully updated!', `Updating post ${post.id}`);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
