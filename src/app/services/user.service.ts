import { Injectable } from '@angular/core';
import {DataService} from './data.service';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {map, tap} from 'rxjs/operators';

import UserListModel from '../models/user-list.model';
import UserDetailModel from '../models/user-detail.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _usersSubject = new BehaviorSubject(null);
  users$ = this._usersSubject.asObservable();

  private _userSubject = new BehaviorSubject(null);
  currentUser$ = this._userSubject.asObservable();

  usersCount$: Observable<number>;

  currentUserUrl: string;
  matchTerm: string;

  constructor(
    private dataService: DataService
  ) { }

  // Pide el UsersResponseModel a dataService.
  // Almacena el count de usuarios en this.usersCount y
  // devuelve un array de UserListModel.
  fetchUsers( userName: string ): void {
    this.dataService.getUsers( userName )
      .pipe(
        tap(
          response => this.usersCount$ = of ( response.totalCount )
        )
      )
      .pipe(
        map(
          response => {
            return response.items.map(
              item => new UserListModel(
                item.id,
                item.url,
                item.html_url,
                item.login.toLowerCase(),
                item.avatar_url,
                item.text_matches
              )
            );
          }
        )
      )
      .subscribe(
        users => {
          this._usersSubject.next( users );
        },
        error => console.log( error )
      );
  }

  fetchUserDetail( userUrl: string ): void {
    this.dataService.getUserDetail( userUrl )
      .pipe(
        map(
          item => {
              return new UserDetailModel(
                item.login,
                item.id,
                item.url,
                item.avatar_url,
                item.html_url,
                item.repos_url,
                item.gists_url,
                item.followers_url,
                item.public_repos,
                item.public_gists,
                item.name,
                item.email,
                item.followers,
                item.hireable
              );
            }
        )
      )
      .subscribe(
        userDetail => {
          this._userSubject.next( userDetail );
        },
        error => console.log( error )
      );
  }
}
