import { Injectable } from '@angular/core';
import { DistrictModel } from 'src/app/models/DistrictModel';
import { HttpClient } from '@angular/common/http';
import { ApiHttpService } from '../general/api-http.service';
import { Constants } from 'src/app/config/constant';

@Injectable()
export class DistrictService extends ApiHttpService<DistrictModel> {
  constructor(constant: Constants, http: HttpClient) {
    super(constant, http, 'district');
  }
}
