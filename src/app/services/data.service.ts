import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UsersResponseModel} from '../models/users-response.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  private static _constructUrl( username: string ): string {
    return `https://api.github.com/search/users?q=${ username }+in:login+in:fullname+in:email+type:user&per_page=20`;
  }

  init(): void {}

  getUsers( userName: string ): Observable<UsersResponseModel> {
    return this.http.get<any>( DataService._constructUrl( userName ),
      { headers: { 'Accept': 'application/vnd.github.v3.text-match+json' } }
      )
      .pipe(
        map(
          response => {
            return {
              totalCount: response.total_count,
              items: response.items
            } as UsersResponseModel;
          }
        )
      );
  }
}
