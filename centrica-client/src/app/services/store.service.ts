import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/config/constant';
import { Injectable } from '@angular/core';
import { StoreModel } from '../models/StoreModel';
import { ApiHttpService } from './general/api-http.service';

@Injectable({
  providedIn: 'root',
})
export class StoreService extends ApiHttpService<StoreModel> {
  constructor(constant: Constants, http: HttpClient) {
    super(constant, http, 'store');
  }
}
