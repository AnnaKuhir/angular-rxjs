import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersSectionComponent } from './users-section/users-section.component';
import { UserCardComponent } from './users-section/user-card/user-card.component';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PhotosSectionComponent } from './photos-section/photos-section.component';
import { PhotoItemComponent } from './photos-section/photo-item/photo-item.component';
import { CommentsSectionComponent } from './comments-section/comments-section.component';
import { CommentItemComponent } from './comments-section/comment-item/comment-item.component';
import { PostsSectionComponent } from './posts-section/posts-section.component';
import { PostItemComponent } from './posts-section/post-item/post-item.component';
import { EditBtnComponent } from './edit-btn/edit-btn.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { EditModalDialogComponent } from './edit-modal-dialog/edit-modal-dialog.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { AboutGuard } from './guard';

import { ToastrModule } from 'ngx-toastr';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    UsersSectionComponent,
    UserCardComponent,
    PhotosSectionComponent,
    PhotoItemComponent,
    CommentsSectionComponent,
    CommentItemComponent,
    PostsSectionComponent,
    PostItemComponent,
    EditBtnComponent,
    EditModalDialogComponent,
    NotFoundPageComponent,
    SidebarMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    FontAwesomeModule,
  ],
  providers: [AboutGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
