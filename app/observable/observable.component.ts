import { Component, OnInit } from '@angular/core';
import { BookService } from "../book.service";
import { Book } from "../book";
import { Observable } from "rxjs";
import {  InMemoryDataService } from "../in-memory-data-service";

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  constructor(private bookService : BookService) { }
  
  books : Book[];
  errorMessage : String;
  bookId : number;
  bookName : string;
  bookAuthor : string;
  bookPrice : number;
  bookDescription : string;
  book = new Book();

  ngOnInit() : void {
    this.getBooks();
  }

  getBooks() : void {
    this.bookService.getBooksWithObservable()
      .subscribe(books => this.books = books,
                error => this.errorMessage = <any>error );
  }

  addBook() : void {
    this.bookService.addBookWithObservable(this.book)
      .subscribe( book => {
          this.getBooks();
          this.reset();
          this.bookId = book.id;
          this.bookName = book.name;
          this.bookAuthor = book.author;
          this.bookPrice = book.price;
          this.bookDescription = book.description;
      },
    error => this.errorMessage = <any>error);
  }
  private reset(){
    this.book.id = null;	 
    this.book.name = null;
    this.book.author = null;
    this.book.price = null;
    this.book.description = null;
    this.errorMessage = null;
    this.bookId = null;
    this.bookName = null;
    this.bookAuthor = null;
    this.bookPrice = null;
    this.bookDescription = null;
  }
}