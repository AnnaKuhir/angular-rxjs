import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutGuard } from './guard';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { PhotosSectionComponent } from './photos-section/photos-section.component';
import { PostsSectionComponent } from './posts-section/posts-section.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./users-section/users-section-routing.module').then(
        (m) => m.UsersSectionRoutingModule
      ),
  },
  {
    path: 'comments',
    loadChildren: () =>
      import('./comments-section/comments-section-routing.module').then(
        (m) => m.CommentsSectionRoutingModule
      ),
  },
  {
    path: 'photos',
    loadChildren: () =>
      import('./photos-section/photos-section-routing.module').then(
        (m) => m.PhotosSectionRoutingModule
      ),
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('./posts-section/posts-section-routing.module').then(
        (m) => m.PostsSectionRoutingModule
      ),
  },
  { path: '**', component: NotFoundPageComponent, canActivate: [AboutGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
