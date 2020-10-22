import { Component, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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
  constructor(private apiService: ApiDataService) {}

  ngOnInit(): void {
    this.apiService
      .getPosts()
      .pipe(takeUntil(this.destroy$))
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
