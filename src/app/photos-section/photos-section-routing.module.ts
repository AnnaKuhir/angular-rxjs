import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotosSectionComponent } from './photos-section.component';

const routes: Routes = [{ path: '', component: PhotosSectionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotosSectionRoutingModule {}
