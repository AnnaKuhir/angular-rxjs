import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosSectionComponent } from './photos-section.component';
import { PhotoItemComponent } from './photo-item/photo-item.component';
import { PhotosSectionRoutingModule } from './photos-section-routing.module';


@NgModule({
  declarations: [PhotosSectionComponent, PhotoItemComponent],
  imports: [
    CommonModule,
    PhotosSectionRoutingModule,
  ],
})
export class PhotosSectionModule {}
