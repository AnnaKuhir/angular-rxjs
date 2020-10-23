import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/shared/models/post';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent implements OnInit {
  @Input() post: Post;
  @Output() postInfo: Post;
  @Output() updatePostItem: EventEmitter<Post> = new EventEmitter<Post>();

  constructor() {}

  ngOnInit(): void {
    this.postInfo = this.post;
  }

  updatePostCard() {
    this.updatePostItem.emit(this.post);
  }
}
