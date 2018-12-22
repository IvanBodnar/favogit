import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  private static _constructUrl(username: string): string {
    return `https://api.github.com/search/users?q=${ username }+in:login+in:fullname+in:email+type:user`;
  }

  getUsers( username: string ): Observable<any> {
    return this.http.get<any>( DataService._constructUrl( username ) );
  }
}
