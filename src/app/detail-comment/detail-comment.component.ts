import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {UserService} from '../user.service'
@Component({
  selector: 'app-detail-comment',
  templateUrl: './detail-comment.component.html',
  styleUrls: ['./detail-comment.component.css']
})
export class DetailCommentComponent implements OnInit {

  constructor(private router:ActivatedRoute, private httpComment:UserService) { }
  idPost = this.router.snapshot.params.id
  dataComent

  ngOnInit(): void {
    this.httpComment.getDetailComments(this.idPost).subscribe(result=> {
      this.dataComent = result      
    })
  }
    
}
