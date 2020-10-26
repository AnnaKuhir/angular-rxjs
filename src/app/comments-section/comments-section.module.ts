import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsSectionComponent } from './comments-section.component';
import { CommentItemComponent } from './comment-item/comment-item.component';
import { CommentsSectionRoutingModule } from './comments-section-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CommentsSectionComponent, CommentItemComponent],
  imports: [
    CommonModule,
    CommentsSectionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CommentsSectionModule {}
