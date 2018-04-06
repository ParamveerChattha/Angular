import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
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
      .subscribe( 
        response =>{
          // we suscribe to observable. 'get' returns oberservable
          this.getRequest = (response.json());
          console.log(response.json());
      },
      //we need to define the type of error, deault is any, so we give ot class Response, 
      //so we can use intelli sense to get the type of errors
        (error : Response) =>{
            if(error instanceof NotFoundError)
              alert("message delted already")
            else{
              alert('an unexpected error occured');
              console.log(error.status === 404);
            }
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
    .subscribe (
      response =>
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
    },
      (error : Response) => {
        if(error instanceof BadInput)
        //this.form.setErrors(error.originalError);
          alert("message delted already");
          else
          {
          //we do nothave a form here
          //this.form.setErrors(error.json());
          // it is to display the message at user screen. see, tehre is no dispay no alert in abveo line
          alert('An unexpected error occured');
          console.log(error);
        }
        
        }          
      )
  }
  updatePost(input)
  {
    //patch is not accepted by all the servers. it depends if it can understand it
  this.service.updatePosts(input.id)
    .subscribe(
      response =>{
        console.log(response.json());
    }, 
      (error : AppError) =>{
          if(error instanceof NotFoundError)
            alert("message delted already");
          else{
          alert('An unexpected error occured');
          console.log(error);
          }
    })
    //post will update all the inputs, without any condition
    //this.http.put(this.url, JSON.stringify(input));
  }
  deletePost(input)
  {
    this.service.deleteposts(232)
      .subscribe(
        response =>{
        let index = this.getRequest.indexOf(input);
        this.getRequest.splice(index,1);
    }, 
        (error : AppError) =>{
          if (error instanceof NotFoundError)
            alert("message already deleted");  
          else
            {
            alert('an unexpected error occured');  
            console.log(error);      
            }
    })  
  }
}
 