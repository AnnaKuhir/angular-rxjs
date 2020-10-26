import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsSectionComponent } from './posts-section.component';

const routes: Routes = [{ path: '', component: PostsSectionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsSectionRoutingModule {}
