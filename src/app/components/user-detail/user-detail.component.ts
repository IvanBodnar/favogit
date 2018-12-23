import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  currentUser: any;

  constructor(
    private userService: UserService,
    private location: Location
  ) { }

  ngOnInit() {
    this.userService.currentUser$
      .subscribe(
        user => {
          this.currentUser = user;
        }
      );
  }

  onVolver() {
    this.location.back();
  }

}
