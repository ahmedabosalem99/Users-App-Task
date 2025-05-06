import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../Services/users.service';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.component.html',
  styles: ``
})
export class UserDetailsComponent implements OnInit {
  userId: any
  userDetails: any
  constructor(myActivated: ActivatedRoute,private  userService: UsersService){
    this.userId = myActivated.snapshot.params["id"]
  }

  ngOnInit(): void {
      this.userService.getUserByID(this.userId).subscribe({
        next:(data) => this.userDetails = data,
        error: (error) => console.log(error)
      })
  }
}
