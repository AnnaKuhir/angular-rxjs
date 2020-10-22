import { Component, Input, OnInit } from '@angular/core';
import { CommentItem } from 'src/app/shared/models/comment-item';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss'],
})
export class CommentItemComponent implements OnInit {
  @Input() comment: CommentItem;
  constructor() {}

  ngOnInit(): void {}
}
