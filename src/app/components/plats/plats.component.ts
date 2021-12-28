import { Component, OnInit } from '@angular/core';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-plats',
  templateUrl: './plats.component.html',
  styleUrls: ['./plats.component.css']
})
export class PlatsComponent implements OnInit {

  plats:any = [];
  constructor(private platServie: PlatService) { }

  ngOnInit() {
    this.platServie.httpSendRequestToGetAllPlats().subscribe(
      (data) =>{
        this.plats = data.plats;
        console.log(data.plats);
        
      }
    )
  }

}
