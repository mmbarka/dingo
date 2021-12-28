import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-search-chef',
  templateUrl: './search-chef.component.html',
  styleUrls: ['./search-chef.component.css']
})
export class SearchChefComponent implements OnInit {

  chef: any={};
  searchChefForm: FormGroup;
  findedChefs: any=[];

  constructor(
      private formBuilder: FormBuilder,
      private chefService: ChefService
    ) { }

  ngOnInit() {
    this.searchChefForm = this.formBuilder.group(
      {
        speciality: ['']
      }
    )
  }

  searchChef(){
    this.chefService.httpSendRequestToSearchChefByName(this.chef).subscribe(
      (data) =>{
        this.findedChefs = data.allChefs;
        
        console.log(this.findedChefs);
        
      }
    )
  }

}
