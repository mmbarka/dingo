import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-plats-admin',
  templateUrl: './plats-admin.component.html',
  styleUrls: ['./plats-admin.component.css']
})
export class PlatsAdminComponent implements OnInit {
  plats: any;
  pageOfItems: Array<any>;
  term:string;
  constructor(private platService: PlatService,
    private router: Router) { }

  ngOnInit() {
    this.getAllPlats();
    console.log(this.pageOfItems);
      
  }

  deletePlat(id: any) {
    this.platService.httpSendRequestToDeletePlat(id).subscribe(
      () => {
        console.log('delete with success');
        this.getAllPlats();
      }

    )
  }

  getAllPlats() {
    this.platService.httpSendRequestToGetAllPlats().subscribe(
      (data) => {       
        this.plats = data.plats;
        console.log('data.plats:',this.plats);
        
      }
    );
  }

  goToAdd() {
    this.router.navigate(["addPlat"]);
  }

  displayPlat(id: number) {
    this.router.navigate([`platInformation/${id}`]);
  }

  editPlat(id: number) {
    this.router.navigate([`editPlat/${id}`]);
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

}

