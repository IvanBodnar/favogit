import { Injectable } from '@angular/core';
import {DataService} from './data.service';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _usersSubject = new Subject();
  users$ = this._usersSubject.asObservable();

  constructor(
    private dataService: DataService
  ) { }

  fetchUsers( userName: string ): void {
    this.dataService.getUsers( userName )
      .subscribe(
        users => {
          this._usersSubject.next(users);
        }
      );
  }
}
