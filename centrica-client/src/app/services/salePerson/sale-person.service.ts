import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/config/constant';
import { Injectable } from '@angular/core';
import { SalePersonModel } from 'src/app/models/SalePersonModel';
import { ApiHttpService } from '../general/api-http.service';

@Injectable({
  providedIn: 'root',
})
export class SalePersonService extends ApiHttpService<SalePersonModel> {
  constructor(constant: Constants, http: HttpClient) {
    super(constant, http, 'salePerson');
  }
}
