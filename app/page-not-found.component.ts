// import { Location } from '@angular/language-service/src/types';
import { BookService } from './book.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Book} from './book';
// import { BOOKS} from './mock-book';
import { Location } from "@angular/common";

@Component({
  selector: 'page-not-found-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
template:`<h1 class="text-center">404 Error!! Page Not Found... <br><br>:( </h1>
   <a class="btn btn-warning"  (click)=goBack()>Go Back</a>`
})
export class PageNotFoundComponent {
//   title:string = 'Book Store';// delete the string interpollation
 constructor(private loaction : Location){}

 goBack() : void {
   this.loaction.back();
 }

}
