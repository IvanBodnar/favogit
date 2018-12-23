import { Component, OnInit } from '@angular/core';

import {UserService} from '../../services/user.service';
import {UsersResponseModel} from '../../models/users-response.model';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.users$
      .subscribe(
        ( response: UsersResponseModel ) => {
          console.log(this.userService.usersCount);
          this.users = response;
        }
      );
  }

}
