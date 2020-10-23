import { Component, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { catchError, delay, map, takeUntil } from 'rxjs/operators';
import { Post } from '../shared/models/post';
import { ApiDataService } from '../shared/services/api-data.service';

@Component({
  selector: 'app-posts-section',
  templateUrl: './posts-section.component.html',
  styleUrls: ['./posts-section.component.scss'],
})
export class PostsSectionComponent implements OnInit {
  @Output() posts: Post[];
  isLoading: boolean;
  private destroy$: Subject<void> = new Subject<void>();
  constructor(
    private apiService: ApiDataService,
    private toastr: ToastrService
  ) {
    this.isLoading = true;
  }

  ngOnInit(): void {
    this.apiService
      .getPosts()
      .pipe(
        delay(1000),
        takeUntil(this.destroy$),
        catchError((error) => {
          throw 'Error in source. Details: ' + error;
        })
      )
      .subscribe((posts: Post[]) => {
        if (posts) {
          this.posts = posts;
          this.isLoading = false;
        }
      });
  }

  updatePostItem(post) {
    this.apiService
      .getPost(post.id)
      .pipe(
        takeUntil(this.destroy$),
        catchError((error) => {
          throw 'Error in source. Details: ' + error;
        })
      )
      .subscribe((post) => {
        let index = this.posts.findIndex((postItem) => postItem.id === post.id);
        this.posts[index].title = post.title;
        this.posts[index].body = post.body;
        this.toastr.info('Successfully updated!', `Updating post ${post.id}`);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
