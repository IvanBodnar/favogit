import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UsersResponseModel} from '../models/users-response.model';
import {map} from 'rxjs/operators';
// import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = `https://api.github.com/`;
  headers = {
    'Accept': 'application/vnd.github.v3.text-match+json',
    // 'Authorization': `token ${ environment.token }`
  };

  constructor(
    private http: HttpClient
  ) { }

  private _constructUrl( username: string ): string {
    return `
      ${ this.baseUrl }search/users?q=${ username }+in:login+in:fullname+in:email+type:user&per_page=20
    `;
  }

  init(): void {}

  // Trae la lista de users que coinciden con la búsqueda y mapea
  // la response a UsersResponseModel. Los headers que agrega hacen
  // que también venga el campo text_matches con los detalles del
  // match (cuál fue el o los campos matcheados)
  getUsers( userName: string ): Observable<UsersResponseModel> {
    return this.http.get<any>( this._constructUrl( userName ),
      { headers: this.headers }
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

  getUserDetail( userUrl: string ): Observable<any> {
    return this.http.get<any>( userUrl, { headers: this.headers } );
  }
}
