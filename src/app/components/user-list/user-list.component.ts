import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
  @ViewChild('selectElement') selectElement: ElementRef;

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

  onSort(): void {
    const selectedOrderValue = this.selectElement.nativeElement.value;
    const order = selectedOrderValue.toLowerCase() === 'ascendente'
                  ? Order.asc
                  : selectedOrderValue.toLowerCase() === 'descendente'
                  ? Order.desc
                  : console.log('Orden no contemplado');
    this.users = _.orderBy(this.users, 'login', order);
  }

}
