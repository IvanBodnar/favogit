import { Component, OnInit } from '@angular/core';

import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: Object[];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.users$
      .subscribe(
        users => console.log(users)
      )
  }

}
