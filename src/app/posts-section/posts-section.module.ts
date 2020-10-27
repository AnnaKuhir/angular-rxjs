import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsSectionComponent } from './posts-section.component';
import { PostItemComponent } from './post-item/post-item.component';
import { PostsSectionRoutingModule } from './posts-section-routing.module';
import { SharedModule } from '../shared/shared.module';
import { EditBtnComponent } from '../edit-btn/edit-btn.component';

@NgModule({
  declarations: [PostsSectionComponent, PostItemComponent, EditBtnComponent],
  imports: [CommonModule, PostsSectionRoutingModule, SharedModule],
})
export class PostsSectionModule {}
