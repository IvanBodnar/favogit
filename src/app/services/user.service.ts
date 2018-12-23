import { Injectable } from '@angular/core';
import {DataService} from './data.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

import UserListModel from '../models/user-list.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _usersSubject = new BehaviorSubject(null);
  users$ = this._usersSubject.asObservable();

  private _userSubject = new BehaviorSubject(null);
  currentUser$ = this._userSubject.asObservable();

  usersCount: number;
  currentUserUrl: string;

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
          response => this.usersCount = response.totalCount
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
                item.login,
                item.text_matches
              )
            );
          }
        )
      )
      .subscribe(
        users => {
          this._usersSubject.next(users);
        }
      );
  }

  fetchUserDetail( userUrl: string ): void {
    this.dataService.getUserDetail( userUrl )
      .subscribe(
        userDetail => {
          this._userSubject.next( userDetail );
        },
        error => console.log(error)
      );
  }
}
