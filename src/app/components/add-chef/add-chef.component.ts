import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-add-chef',
  templateUrl: './add-chef.component.html',
  styleUrls: ['./add-chef.component.css']
})
export class AddChefComponent implements OnInit {
  chef: any = {};
  addChefForm: FormGroup;
  idToEdit: any;
  title: any;
  imagePreview: any;
  constructor(private formBuilder: FormBuilder,
    private chefService: ChefService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.title = 'Add Chef';
    this.idToEdit = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.idToEdit) {
      this.title = 'Edit Chef';
      this.chefService.httpSendRequestToGetChefById(this.idToEdit).subscribe(
        (data) => {
          this.chef = data.chef;
        }
      );
    }

    this.addChefForm = this.formBuilder.group({
      name: [''],
      speciality: [''],
      experience: [''],
      img: [''],
    });
  }

  addChef() {
    if (this.idToEdit) {
      this.chefService.httpSendRequestToEditChef(this.chef).subscribe(
        () => {
          console.log('chef eddited with success');
          this.router.navigate(['admin']);
        }
      )
    }
    else {
      this.chefService.httpSendRequestToAddChef(this.chef,this.addChefForm.value.img).subscribe(
        () => {
          console.log('chef added with success');
          this.router.navigate(['admin']);

        }
      );
    }

  }

  onImageSelected(event: Event) {
    
    
    const file = (event.target as HTMLInputElement).files[0];
    console.log('file:',file);
    this.addChefForm.patchValue({ img: file });
    this.addChefForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);

  }

}
