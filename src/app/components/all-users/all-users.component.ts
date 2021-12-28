import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users: any;
  constructor(private userService: UserService) { }

  ngOnInit(){
  
    this.getAllusers();
  }

  getAllusers()
  {
  this.userService.sendRequestToGetAllUsers().subscribe( 
    (data) => 
    {
      this.users = data;
    }
     );
  }

  deleteUser(id: number)
  {
  this.userService.sendRequesToDeleteUser(id).subscribe( 
    () => 
    {
      console.log('user deleted with success');
      this.getAllusers();
    }
     );
  }

}
