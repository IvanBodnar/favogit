import { Component, OnInit } from '@angular/core';

import {FavoriteService} from '../../services/favorite.service';

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

}
