import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service'
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private httpUser:UserService) { }
  dataUser;
  ngOnInit(): void {
    this.httpUser.getAllUser().subscribe(result => {
      this.dataUser = result
    })
  }
}
