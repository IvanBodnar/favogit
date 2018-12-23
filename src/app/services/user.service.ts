import { Injectable } from '@angular/core';
import {DataService} from './data.service';
import {BehaviorSubject} from 'rxjs';
import {map, tap} from 'rxjs/operators';

import UserListModel from '../models/user-list.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _usersSubject = new BehaviorSubject(null);
  users$ = this._usersSubject.asObservable();

  usersCount: number;
  currentUser: UserListModel;

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
}
