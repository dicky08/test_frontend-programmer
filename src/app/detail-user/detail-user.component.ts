import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {UserService} from '../user.service'
@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {
  dataUser;
  dataPost;
  idPost;
  resultBirth;
  constructor(private router:ActivatedRoute, private httpDetail:UserService) { }
  idUser = this.router.snapshot.params.id
  ngOnInit(): void {
    this.httpDetail.getDetailUser(this.idUser).subscribe(result => {
      this.dataUser=result
      let pecahBirth;
      let pecahBirth2;
      let newBirth;
      let newBirth2;
      
      pecahBirth = this.dataUser.dateOfBirth.split('-').splice(0,2).join('')
      pecahBirth2 = this.dataUser.dateOfBirth.split('-')[2].split('T')[0]

      newBirth = pecahBirth.split('').slice(0,4)
      newBirth2 = pecahBirth.split('').slice(4,6)
      this.resultBirth = `${pecahBirth2}-${newBirth2.join('')}-${newBirth.join('')}`
      
    })
    this.httpDetail.getDetailPost(this.idUser).subscribe(results => {
      this.dataPost=results
      })
    }
}
