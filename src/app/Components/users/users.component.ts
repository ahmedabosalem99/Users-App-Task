import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../Services/users.service';
import { OneUserComponent } from '../one-user/one-user.component';

@Component({
  selector: 'app-users',
  imports: [OneUserComponent],
  templateUrl: './users.component.html',
  styles: ``
})
export class UsersComponent implements OnInit {
  AllUser: any
  constructor(private userService: UsersService){}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: (data) => this.AllUser = data,
      error: (error) => console.log(error)

    })
  }
}
