import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb(){

   let  chefs =  [
      {id:1 ,name:'Ali',speciality:'Cuisine TN', experience:7},
      {id:2 ,name:'Salah', speciality:'Cuisine FR', experience:3},
      {id:3 ,name:'Mohamed', speciality:'Cuisine IT', experience:10},
      {id:4 ,name:'Akram', speciality:'Cuisine TK', experience:15},
   ];

   let  plats =  [
      {id: 1, name:'Couscous', price: 10, description: 'Plat TN'},
      {id: 2, name:'Ojja', price: 15, description: 'Plat LIB'},
      {id: 3, name:'Pates', price: 17, description: 'Plat FR'},
      {id: 4, name:'Lablebi', price: 13, description: 'Plat IT'},
      {id: 6, name:'Ojja', price: 3, description: 'Plat UK'},
    ];

    let  users =  [
      {id: 1, firstName:'Marouen', lastName:'Barka', age: 29},
      {id: 2, firstName:'Abderahmen', lastName:'Masmoudi', age: 30},
      {id: 3, firstName:'Helmi', lastName:'Mtaa Allah', age: 31},
      {id: 4, firstName:'Amani', lastName:'Bchir', age: 23},
      
    ];
   return {chefs, plats, users};

  }
}
