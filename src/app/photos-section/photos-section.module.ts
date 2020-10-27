import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosSectionComponent } from './photos-section.component';
import { PhotoItemComponent } from './photo-item/photo-item.component';
import { PhotosSectionRoutingModule } from './photos-section-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [PhotosSectionComponent, PhotoItemComponent],
  imports: [
    CommonModule,
    PhotosSectionRoutingModule,
    SharedModule
  ],
})
export class PhotosSectionModule {}
