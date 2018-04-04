import { PostService } from './../services/post.service';
import { HttpRequest } from 'selenium-webdriver/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'httprequests',
  templateUrl: './httprequests.component.html',
  styleUrls: ['./httprequests.component.css']
})
export class HttprequestsComponent implements OnInit {
 getRequest : any = [];

  constructor(private service: PostService) {}

  ngOnInit(){
    //simple get method
    this.service.getPosts()
    .subscribe( response =>{
      // we suscribe to observable. 'get' returns oberservable
      this.getRequest = (response.json());
      console.log(response.json());
    }
  );
}
//input whcih we got from html page
createPost(input : HTMLInputElement){
  //storing it locally in json format to push to the server
  // post will have title, and will store input .value in title.
  let post: any = {title : input.value }
  //initializing the value to '' , so in template it automatically gets removed (in input box)
    input.value = '' ;

this.service.createPosts(post)
.subscribe (response =>
{
  /*  let post(3 lines above) and post.id will give  a compilation error.
  to resolve it, either make post of type ' any' 
  or
  put id in square brackets [] ..  both are fine  */
  post.id = response.json().id;
  /*console.log(response.json());
  console.log(post['id']); */
  //Splice(index,number of object to be deteld,object to be added at starting position)
  this.getRequest.splice(0, 0, post);
  console.log(this.getRequest);
})

}

updatePost(input)
{
  //patch is not accepted by all the servers. it depends if it can understand it
this.service.updatePosts(input.id)
.subscribe(response =>{
  console.log(response.json());
})
//post will update all the inputs, without any condition
//this.http.put(this.url, JSON.stringify(input));

}


  

}
 