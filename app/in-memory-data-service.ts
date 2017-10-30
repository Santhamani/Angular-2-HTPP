
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Book } from './book';

export class InMemoryDataService  implements InMemoryDbService {

    createDb() {
        let books = [
            {id:1,name:'Angular 2',author:'Assim Hussain',price:1200,description:'Angular Cookbook'},
            {id:2,name:'Mongo DB',author:'Sandeep',price:500,description:'Doctument Type Database'},
            {id:3,name:'Angular JS',author:'Harish',price:1000,description:'Angular Essentials'},
            {id:4,name:'Express',author:'Ramkiran',price:300,description:'Middleware Technology'},
            {id:5,name:'NODE',author:'Lakshmi Narayana',price:400,description:'Serverside Programming'},
            {id:6,name:'MEAN',author:'Suresh Palaka',price:1200,description:'Full Stack with Mongo DB, Node, Express and ANgular 2/4'},
            {id:7,name:'Angular 4',author:'Assim',price:670,description:'Angular 4 Practice Book'}
        ];
        return {books};
      }

}
