// Angular Modules
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from 'src/app/config/constant';
import { Observable, firstValueFrom, lastValueFrom } from 'rxjs';
import * as qs from 'qs';
import { DistrictModel } from 'src/app/models/DistrictModel';

export class ApiHttpService<T> {
  private _url: string = '';
  constructor(
    private constant: Constants,
    private http: HttpClient,
    private _resourceName: string
  ) {
    this._url = this.constant.API_ENDPOINT + this._resourceName;
  }
  public async get() {
    let result = this.http.get<T[]>(this._url);
    return await lastValueFrom(result);
  }
  public async post(data: T) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: 'my-auth-token',
        Accept: '*/*',
      }),
    };
    let json = JSON.stringify(data);
    let result = this.http.post<T>(
      this._url,
      JSON.stringify(JSON.stringify(json)),
      options
    );
    return await lastValueFrom(result);
  }
  public async put(data: T) {
    let result = this.http.put<T>(this._url, data);
    return await lastValueFrom(result);
  }
  public async delete() {
    let result = this.http.delete(this._url);
    return await lastValueFrom(result);
  }
  public async getWithQueryString(params: any) {
    const queryString = qs.stringify(params);
    const urlWithQueryString = `${this._resourceName}?${queryString}`;
    let result = this.http.get<T[]>(urlWithQueryString);
    return await lastValueFrom(result);
  }
  public async getUrl(urlAppendix: string) {
    let result = this.http.get<T[]>(this._url + urlAppendix);
    return await lastValueFrom(result);
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
