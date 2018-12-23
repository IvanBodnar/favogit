import { Component, OnInit } from '@angular/core';

import {UserService} from '../../services/user.service';
import UserListModel from '../../models/user-list.model';

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
        ( users: UserListModel[] ) => {
          console.log(users);
          this.users = users;
        }
      );
  }

}
