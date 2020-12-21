import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service'
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor(private httpPost:UserService) { }
  postList;
  userList;
  idPost;
  ngOnInit(): void {
    this.httpPost.getAllPost().subscribe(result=> {
      this.postList = result
    })
    this.httpPost.getAllUser().subscribe(userAll=> {
      this.userList = userAll
    })      
  }
}
