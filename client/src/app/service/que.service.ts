import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QueService {

  labelArray = [];
  structureArray = [];

  queUrl = environment.queUrl;

  constructor(
    private _http: HttpClient
  ) { }

  create(obj) {
    return this._http.post(this.queUrl, obj);
  }

  get() {
    return this._http.get(this.queUrl);
  }

  update(obj) {
    return this._http.put(this.queUrl, obj);
  }

  publish(obj) {
    return this._http.put(this.queUrl + 'publish', obj);
  }

  delete(id) {
    return this._http.delete(this.queUrl+id);
  }

}
