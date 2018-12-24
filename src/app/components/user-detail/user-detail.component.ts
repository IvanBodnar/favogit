import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {UserService} from '../../services/user.service';
import {FavoriteService} from '../../services/favorite.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  currentUser: any;

  constructor(
    private userService: UserService,
    private favoriteService: FavoriteService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.currentUser$
      .subscribe(
        user => {
          this.currentUser = user;
        }
      );
  }

  onFavorite() {
    this.favoriteService.addToFavorites( this.currentUser );
  }

  onVolver() {

  }

}
