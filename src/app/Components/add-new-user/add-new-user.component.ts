import { Component} from '@angular/core';
import { UsersService } from '../../../Services/users.service';

@Component({
  selector: 'app-add-new-user',
  imports: [],
  templateUrl: './add-new-user.component.html',
})
export class AddNewUserComponent {
  newUserData: any
  constructor(private userService: UsersService) {}

  NewUser(name:any, age:any, email:any, phone:any)
  {
    this.newUserData = {name, age, email, phone}
    this.userService.addUser(this.newUserData).subscribe();
  }
}
