import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/config/constant';
import { Injectable } from '@angular/core';
import { ApiHttpService } from './general/api-http.service';
import { SalePersonModel } from '../models/SalePersonModel';

@Injectable({
  providedIn: 'root',
})
export class SalePersonService extends ApiHttpService<SalePersonModel> {
  constructor(constant: Constants, http: HttpClient) {
    super(constant, http, 'salePerson');
  }
}
