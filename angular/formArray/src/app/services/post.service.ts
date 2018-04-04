import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) { }

  getPosts(){
    return this.http.get(this.url);
  }
  createPosts(post){
    return this.http.post(this.url,JSON.stringify(post))
  }
  updatePosts(id){
    return this.http.patch(this.url+'/'+ input.id , JSON.stringify({isRead: true}))
  }
}
