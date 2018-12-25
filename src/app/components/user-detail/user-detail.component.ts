import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {UserService} from '../../services/user.service';
import {FavoriteService} from '../../services/favorite.service';
import UserDetailModel from '../../models/user-detail.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  currentUser: UserDetailModel;
  addFavoriteClass = false;

  constructor(
    private userService: UserService,
    private favoriteService: FavoriteService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.currentUser$
      .subscribe(
        ( user: UserDetailModel ) => {
          this.currentUser = user;
          this.favoriteService.isFavorite( this.currentUser )
            .subscribe(
              ( isFavorite: boolean ) => {
                this.addFavoriteClass = isFavorite;
              }
            );
        }
      );
  }

  onFavorite() {
    this.favoriteService.isFavorite( this.currentUser )
      .subscribe(
        ( isFavorite: boolean ) => {
          this.addFavoriteClass = !isFavorite;
          if ( !isFavorite ) {
            this.favoriteService.addToFavorites( this.currentUser );
          } else {
            this.favoriteService.deleteFavorite( this.currentUser );
          }
        },
        error => console.log( error )
      );

  }

  onVolver() {

  }

}
