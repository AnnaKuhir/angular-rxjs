import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  form: FormGroup;
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

      this.form = new FormGroup({
        sort: new FormControl('')
      });
  }

  sortByKey(key: string) {
    this.comments = this.comments.sort((commentPrev, commentNext) => {
      let commentFirst = commentPrev.email.toLowerCase(),
          commentSecond = commentNext.email.toLowerCase();
      const sortOrder = SortOrder[key];
      if(sortOrder) {
        if (sortOrder === SortOrder.asc){
          if (commentFirst < commentSecond) {
            return -1;
          }
          if (commentFirst > commentSecond) {
            return 1;
          }
        }
        if (sortOrder === SortOrder.desc) {
          if (commentFirst < commentSecond) {
            return 1;
          }
          if (commentFirst > commentSecond) {
            return -1;
          }
        }
        return 0;
      }
    });
  }

  sortComments(value) {
    debugger
    this.sortByKey(value);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

enum SortOrder {
  asc = "asc",
  desc = "desc"
}
