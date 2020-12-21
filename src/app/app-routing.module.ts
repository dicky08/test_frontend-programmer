import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostListComponent} from './post-list/post-list.component'
import {HomeComponent} from './home/home.component'
import {DetailUserComponent} from './detail-user/detail-user.component'
import {DetailCommentComponent} from './detail-comment/detail-comment.component'
import {UserListComponent} from './user-list/user-list.component'
import {TagListComponent} from './tag-list/tag-list.component'
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'post-list',
    component: PostListComponent
  },
 {
  path:'detail-user/:id',
  component: DetailUserComponent
 },
 {
  path:'comment/:id',
  component: DetailCommentComponent
 },
 {
   path: 'user-list',
   component: UserListComponent
 },
 {
   path: 'tag-list/:tag',
   component: TagListComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
