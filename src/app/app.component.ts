import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import {Post} from './post.interface';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  post: Post;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/1', {observe: 'response'}).subscribe(response => {
        this.post = response.body;
        console.log(response);
      },
      (err) => {
        if (err.error instanceof Error) {
          console.log('An error occurred on the client side', err.error.message);
        } else {
          console.log(`Backend returned code ${err.status}, body was: ${err.error} (server error)`)
        }
      });

    const body = this.post;
    const request = this.http.post('https://jsonplaceholder.typicode.com/posts', body, {params: new HttpParams().set('id', '42')});

    request.subscribe((res) => {
      console.log(res);
    },
    err => {
      console .log(err)
    });
  }

}
