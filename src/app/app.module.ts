import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { EditBtnComponent } from './edit-btn/edit-btn.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { EditModalDialogComponent } from './edit-modal-dialog/edit-modal-dialog.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { AboutGuard } from './guard';

import { ToastrModule } from 'ngx-toastr';
import { HoverDirective } from './shared/directives/hover-scroll';
import { AdditionInfoItemComponent } from './shared/components/addition-info-item/addition-info-item.component';

import { UsersSectionModule } from './users-section/users-section.module';
import { CommentsSectionModule } from './comments-section/comments-section.module';
import { PhotosSectionModule } from './photos-section/photos-section.module';
import { PostsSectionModule } from './posts-section/posts-section.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    EditBtnComponent,
    EditModalDialogComponent,
    NotFoundPageComponent,
    SidebarMenuComponent,
    HoverDirective,
    AdditionInfoItemComponent
  ],
  imports: [
    UsersSectionModule,
    CommentsSectionModule,
    PhotosSectionModule,
    PostsSectionModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    SharedModule
  ],
  providers: [AboutGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
