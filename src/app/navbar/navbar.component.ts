import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private httpTag:UserService, private router:Router) { }
  tags;
  ngOnInit(): void {
  }
  tagSearch (data) {

    this.tags = data.target.value
    this.httpTag.getTag(this.tags).subscribe(result => {
      window.location.href = `/tag-list/${this.tags}`
      return result
    })
  }
}
