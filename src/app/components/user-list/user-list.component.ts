import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import _ from 'lodash';

import {UserService} from '../../services/user.service';
import UserListModel from '../../models/user-list.model';
import {Order} from '../../models/order.enum';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: UserListModel[];

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.users$
      .subscribe(
        ( users: UserListModel[] ) => {
          this.users = users;
        }
      );
  }

  onDetail( userUrl: string ): void {
    this.userService.currentUserUrl = userUrl;
    this.userService.fetchUserDetail( userUrl );
    this.router.navigate( [ '/user-detail' ] );
  }

  onSort( order: Order ): void {
    this.users = _.orderBy(this.users, 'login', order);
  }

}
