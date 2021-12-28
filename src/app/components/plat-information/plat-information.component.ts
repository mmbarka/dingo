import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-plat-information',
  templateUrl: './plat-information.component.html',
  styleUrls: ['./plat-information.component.css']
})
export class PlatInformationComponent implements OnInit {
  plat:any={};
  constructor(private activatedRoute: ActivatedRoute,
              private platService: PlatService) { }

  ngOnInit() {
    this.platService.httpSendRequestToGetPlatById(this.activatedRoute.snapshot.params.id).subscribe(
      (data)=>{
        this.plat = data.plat;
        
      }
    )
  }

}
