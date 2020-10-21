import { Component, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { catchError, takeUntil, tap } from 'rxjs/operators';
import { CommentItem } from '../shared/models/comment-item';
import { ApiDataService } from '../shared/services/api-data.service';

@Component({
  selector: 'app-comments-section',
  templateUrl: './comments-section.component.html',
  styleUrls: ['./comments-section.component.scss'],
})
export class CommentsSectionComponent implements OnInit {
  @Output() comments: CommentItem[];

  private destroy$: Subject<void> = new Subject<void>();

  constructor(private apiService: ApiDataService) {}

  ngOnInit(): void {
    this.apiService
      .getComments()
      .pipe(
        takeUntil(this.destroy$),
        catchError((error) => {
          throw 'Error in source. Details: ' + error;
        })
      )
      .subscribe((commentsArr: CommentItem[]) => {
        this.comments = commentsArr;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
