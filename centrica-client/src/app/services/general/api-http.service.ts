// Angular Modules
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/config/constant';
import * as qs from 'qs';

export class ApiHttpService<T> {
  private _url: string = '';
  constructor(
    private constant: Constants,
    private http: HttpClient,
    private _resourceName: string
  ) {
    this._url = this.constant.API_ENDPOINT + this._resourceName;
  }
  public get() {
    return this.http.get<T[]>(this._url);
  }
  public post(data: T) {
    return this.http.post<T>(this._url, data);
  }
  public put(data: T) {
    return this.http.put<T>(this._url, data);
  }
  public delete() {
    return this.http.delete(this._url);
  }
  public getWithQueryString(params: any) {
    const queryString = qs.stringify(params);
    const urlWithQueryString = `${this._resourceName}?${queryString}`;
    return this.http.get<T[]>(urlWithQueryString);
  }
}
// import { BadInput } from './../common/bad-input';
// import { NotFoundError } from './../common/not-found-error';
// import { AppError } from './../common/app-error';
// import { Http } from '@angular/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/throw';

// @Injectable()
// export class DataService {
//   constructor(private url: string, private http: Http) { }

//   getAll() {
//     return this.http.get(this.url)
//       .map(response => response.json())
//       .catch(this.handleError);
//   }

//   create(resource) {
//     return this.http.post(this.url, JSON.stringify(resource))
//       .map(response => response.json())
//       .catch(this.handleError);
//   }

//   update(resource) {
//     return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
//       .map(response => response.json())
//       .catch(this.handleError);
//   }

//   delete(id) {
//     return this.http.delete(this.url + '/' + id)
//       .map(response => response.json())
//       .catch(this.handleError);
//   }

//   private handleError(error: Response) {
//     if (error.status === 400)
//       return Observable.throw(new BadInput(error.json()));

//     if (error.status === 404)
//       return Observable.throw(new NotFoundError());

//     return Observable.throw(new AppError(error));
//   }
// }
