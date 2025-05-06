import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly URL = "http://localhost:3000/users";

  constructor(private myHttpClient: HttpClient) { }

  getAllUsers()
  {
    return this.myHttpClient.get(this.URL);
  }

  getUserByID(id:any)
  {
    return this.myHttpClient.get(`${this.URL}/${id}`)
  }

  addUser(user:any)
  {
    return this.myHttpClient.post(this.URL, user);
  }
}
