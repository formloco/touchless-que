import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = environment.authUrl;
  loggedInStatus

  constructor(private _http: HttpClient) { }

  token() {
    return this._http.get(this.authUrl+'token');
  }

}
