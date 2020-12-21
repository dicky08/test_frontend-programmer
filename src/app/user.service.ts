import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpUser:HttpClient) { }
  urlUser = 'https://dummyapi.io/data/api/user'
  urlPost = 'https://dummyapi.io/data/api/post'
  urlTag = 'https://dummyapi.io/data/api/tag'
  APP_ID = '5fe059775d558779506f845f'
  getAllUser () {
    return this.httpUser.get(`${this.urlUser}`, {headers: {'app-id': this.APP_ID}})
  }
  getAllPost () {
    return this.httpUser.get(`${this.urlPost}`, {headers: {'app-id': this.APP_ID}})
  }
  getDetailUser (id) {
    return this.httpUser.get(`${this.urlUser}/${id}`, {headers: {'app-id': this.APP_ID}})
  }
  getDetailPost (id) {
    return this.httpUser.get(`${this.urlUser}/${id}/post`, {headers: {'app-id': this.APP_ID}})
  }
  getDetailComments (id) {
    return this.httpUser.get(`${this.urlPost}/${id}/comment`, {headers: {'app-id': this.APP_ID}})
  }
  getTag (tag) {
    return this.httpUser.get(`${this.urlTag}/${tag}/post`, {headers: {'app-id': this.APP_ID}})
  }
}
