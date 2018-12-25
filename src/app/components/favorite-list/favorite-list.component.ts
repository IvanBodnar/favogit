import { Component, OnInit } from '@angular/core';

import {FavoriteService} from '../../services/favorite.service';
import UserDetailModel from '../../models/user-detail.model';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {
  favoritesArray: any[];

  constructor(
    public favoriteService: FavoriteService
  ) { }

  ngOnInit() {
    this.favoritesArray = this.favoriteService.favorites;
  }

  onDelete( favoriteUser: UserDetailModel ): void {
    this.favoriteService.deleteFavorite( favoriteUser );
    this.favoritesArray = this.favoriteService.favorites;
  }

}
