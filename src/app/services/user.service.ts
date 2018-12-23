import { Injectable } from '@angular/core';
import {DataService} from './data.service';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private dataService: DataService
  ) { }

  fetchUsers( userName: string ): Observable<any> {
    return this.dataService.getUsers( userName );
  }
}
