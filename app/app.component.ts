import { BookService } from './book.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Book} from './book';
// import { BOOKS} from './mock-book';
import { Http } from "@angular/http";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title:string = 'Book Store';// delete the string interpollation
   //private speakers = [];

  //HTTP Get() from a server
  //  constructor(http: Http) {
  //     http.get('http://jsonplaceholder.typicode.com/users/')
  //         .switchMap((data) => data.json())
  //         .subscribe((data) => {
  //           this.speakers.push(data);
  
  //         });
  //   }
  
}
