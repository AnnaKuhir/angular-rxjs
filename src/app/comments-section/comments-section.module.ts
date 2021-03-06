import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsSectionComponent } from './comments-section.component';
import { CommentItemComponent } from './comment-item/comment-item.component';
import { CommentsSectionRoutingModule } from './comments-section-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CommentsSectionComponent, CommentItemComponent],
  imports: [
    CommonModule,
    CommentsSectionRoutingModule,
    SharedModule
  ],
})
export class CommentsSectionModule {}
