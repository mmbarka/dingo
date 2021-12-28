import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PlatService } from 'src/app/services/plat.service';
@Component({
  selector: 'app-search-plat',
  templateUrl: './search-plat.component.html',
  styleUrls: ['./search-plat.component.css']
})
export class SearchPlatComponent implements OnInit {

  plat: any = {};
  searPlatForm: FormGroup;
  findedPlats: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private platService: PlatService) { 
  }

  ngOnInit() {

    this.searPlatForm = this.formBuilder.group(
      {
        name : [''],
        price: ['']
      }
    )

  }

  searchPlat(){
    console.log(this.plat.name);
    this.platService.httpSendRequestToGetPlatByName(this.plat).subscribe(
      (data) => {
        this.findedPlats = data.allPlats;
      }
    )
  }

 
}
