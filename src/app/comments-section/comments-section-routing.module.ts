import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsSectionComponent } from './comments-section.component';

const routes: Routes = [{ path: '', component: CommentsSectionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentsSectionRoutingModule {}
