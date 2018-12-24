import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  favorites = [];

  constructor() { }

  addToFavorites( favoriteUser: any ): void {
    this.favorites.push( favoriteUser );
  }

  deleteFavorite( favoriteId: number ): void {
    this.favorites = this.favorites.filter(
      element => element.id !== favoriteId
    );
  }
}
