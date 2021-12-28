import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-dishes',
  templateUrl: './popular-dishes.component.html',
  styleUrls: ['./popular-dishes.component.css']
})
export class PopularDishesComponent implements OnInit {
  plats:any;
  constructor() { }

  ngOnInit() {
    this.plats= [
      {id:1,name:"Ojja",price:15,description:"plat tunisien"},
      {id:2,name:"Lablebi",price:10,description:"plat tunisien"},
      {id:3,name:"Mloukhéya",price:20,description:"plat tunisien"}
    ]
  }

}
