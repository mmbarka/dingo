import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-chefs-admin',
  templateUrl: './chefs-admin.component.html',
  styleUrls: ['./chefs-admin.component.css']
})
export class ChefsAdminComponent implements OnInit {
  chefs : any;
  constructor(private chefService:ChefService,
              private router: Router) { }

  ngOnInit() {
   this.getAllChefs();
  }

  goToAddChef(){
    this.router.navigate(["addChef"]);
  }

  getAllChefs()
  {
    this.chefService.httpSendRequestToGetAllChefs().subscribe(
      (data)=>{        
        this.chefs = data.chefs;
      }
    )
  }

  deleteChef(id:number)
   {
     this.chefService.httpSendRequestToDeleteChef(id).subscribe(
       () =>{
         console.log('chef delete with sucess');
         this.getAllChefs();
         
       }
     )
     
   }

   goToDisplayChefInformation(id:number)
   {
     this.router.navigate([`chefInformation/${id}`]);
   }

   goToEditChef(id:number)
   {
     this.router.navigate([`editChef/${id}`]);
   }

}
