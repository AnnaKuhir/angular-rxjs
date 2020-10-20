import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersSectionComponent } from './users-section/users-section.component';
import { UserCardComponent } from './users-section/user-card/user-card.component';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PhotosSectionComponent } from './photos-section/photos-section.component';
import { PhotoItemComponent } from './photos-section/photo-item/photo-item.component';
import { CommentsSectionComponent } from './comments-section/comments-section.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersSectionComponent,
    UserCardComponent,
    PhotosSectionComponent,
    PhotoItemComponent,
    CommentsSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
