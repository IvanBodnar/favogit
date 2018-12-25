import { Injectable } from '@angular/core';
import UserDetailModel from '../models/user-detail.model';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  favorites: UserDetailModel[] = [];
  currentFavorite: UserDetailModel;

  constructor() { }

  isFavorite( user: UserDetailModel ): Observable<boolean> {
    const result = this.favorites.some(
      userItem => userItem.id === user.id
    );
    return of( result );
  }

  addToFavorites( favoriteUser: UserDetailModel ): void {
    this.favorites.push( favoriteUser );
    this.currentFavorite = favoriteUser;
  }

  deleteFavorite( favoriteUser: UserDetailModel ): void {
    this.favorites = this.favorites.filter(
      userItem => userItem.id !== favoriteUser.id
    );
  }
}
