import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsSectionComponent } from './posts-section.component';
import { PostItemComponent } from './post-item/post-item.component';
import { PostsSectionRoutingModule } from './posts-section-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PostsSectionComponent, PostItemComponent],
  imports: [
    CommonModule,
    PostsSectionRoutingModule,
    SharedModule
  ],
})
export class PostsSectionModule {}
