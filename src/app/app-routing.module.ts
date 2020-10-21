import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutGuard } from './guard';
import { CommentsSectionComponent } from './comments-section/comments-section.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { PhotosSectionComponent } from './photos-section/photos-section.component';
import { PostsSectionComponent } from './posts-section/posts-section.component';
import { UsersSectionComponent } from './users-section/users-section.component';

const routes: Routes = [
  {path: '', component: UsersSectionComponent},
  {path: 'comments', component: CommentsSectionComponent},
  {path: 'photos', component: PhotosSectionComponent},
  {path: 'posts', component: PostsSectionComponent, canActivate: [AboutGuard]},
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
