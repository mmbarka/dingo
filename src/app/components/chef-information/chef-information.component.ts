import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-chef-information',
  templateUrl: './chef-information.component.html',
  styleUrls: ['./chef-information.component.css']
})
export class ChefInformationComponent implements OnInit {
  id: any;
  chef: any = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private chefService: ChefService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.chefService.httpSendRequestToGetChefById(this.id).subscribe(
      (data) =>
      {
        this.chef = data.chef;
      } 
    ) 
  }

}
