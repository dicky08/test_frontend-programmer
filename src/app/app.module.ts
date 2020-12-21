import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostListComponent } from './post-list/post-list.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { DetailCommentComponent } from './detail-comment/detail-comment.component';
import { UserListComponent } from './user-list/user-list.component';
import { TagListComponent } from './tag-list/tag-list.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostListComponent,
    HomeComponent,
    DetailUserComponent,
    DetailCommentComponent,
    UserListComponent,
    TagListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
