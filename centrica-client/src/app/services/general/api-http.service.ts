// Angular Modules
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ApiHttpService<T> {
  constructor(private http: HttpClient) {}
  public get(url: string) {
    return this.http.get<T[]>(url);
  }
  public post(url: string, data: T) {
    return this.http.post<T>(url, data);
  }
  public put(url: string, data: T) {
    return this.http.put<T>(url, data);
  }
  public delete(url: string) {
    return this.http.delete(url);
  }
}
