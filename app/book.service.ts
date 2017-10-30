
import { Injectable } from '@angular/core';
import {Book} from './book';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from "rxjs";
import { Http, RequestOptions, Headers, Response } from "@angular/http";

@Injectable()

export class BookService{
    url = 'api/books';
    constructor(private http : Http){}

    getBooksWithObservable() : Observable<Book[]>{
        return this.http.get(this.url)
                .map(this.extractData)
                .catch(this.handleErrorObservable);
    }

    addBookWithObservable(book:Book) : Observable<Book>{
        let headers = new Headers({'Content-Type' : 'application/json'});
        let options = new RequestOptions({headers : headers});
        return this.http.post(this.url, book, options)
                    .map(this.extractData)
                    .catch(this.handleErrorObservable);
    }

    getBooksWithPromise() : Promise<Book[]>{
        return this.http.get(this.url).toPromise()
                .then(this.extractData)
                .catch(this.handleErrorPromise);
    }

    addBookWithPromise(book:Book) : Promise<Book>{
        let headers = new Headers({'Content-Type' : 'application/json'});
        let options = new RequestOptions({headers : headers});
        return this.http.post(this.url, book, options).toPromise()
                    .then(this.extractData1)
                    .catch(this.handleErrorPromise);
    }

    private extractData(res : Response){
        let body = res.json();
        return body.data || {};
    }
    
    private extractData1(res : Response){
        let body = res.json();
        return body.data || {};
    }

    private handleErrorObservable(error : Response | any) {
         console.error(error.message || error);
         return Observable.throw(error.message || error);
     }

    private handleErrorPromise(error : Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }
    
}