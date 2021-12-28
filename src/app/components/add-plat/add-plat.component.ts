import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrls: ['./add-plat.component.css']
})
export class AddPlatComponent implements OnInit {
  title:string;
  plat:any={};
  idToEdit : any;
  addPlatForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
              private platService: PlatService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.title = 'Add Plat';
    this.idToEdit= this.activatedRoute.snapshot.paramMap.get('id');
    if (this.idToEdit) {
      this.title = 'Edit Plat';
      this.platService.httpSendRequestToGetPlatById(this.idToEdit).subscribe(
        (data)=>{
          this.plat = data.plat;
        }
      )
    }
    this.addPlatForm = this.formBuilder.group({
      name:[''],
      description:[''],
      price:[''],
      note:['']
    });
  }

  addOrEditPlat()
  {
    if (this.idToEdit) {
      this.platService.httpSendRequestToEditPlat(this.plat).subscribe(
        () =>
        {
          console.log('plat eddited with sucess');
          this.router.navigate(['admin']);
        }
        
      )
      
    } else {
      this.platService.httpSendRequestToAddPlat(this.plat).subscribe(
        () =>
        {
          console.log('plat added with sucess');
          this.router.navigate(['admin']);
        }
        
      )
    }
    
  }

}
