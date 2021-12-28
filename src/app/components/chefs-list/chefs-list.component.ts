import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chefs-list',
  templateUrl: './chefs-list.component.html',
  styleUrls: ['./chefs-list.component.css']
})
export class ChefsListComponent implements OnInit {
  x:any;
  constructor() { }

  ngOnInit() {
    this.x = [
      {name:'Ali',speciality:'Cuisine TN'},
      {name:'Salah', speciality:'Cuisine FR'},
      {name:'Mohamed', speciality:'Cuisine IT'},
      {name:'Akram', speciality:'Cuisine TK'}
    ]
  }
  

}
