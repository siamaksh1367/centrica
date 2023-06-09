import { Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { DistrictModel } from 'src/app/models/DistrictModel';

export interface IDistrictService {
  getAllDistrict(): Observable<DistrictModel[]>;
  addDistrict(districtModel: DistrictModel): Observable<DistrictModel>;
}

export const DISTRICT_SERVICE_TOKEN = new InjectionToken<IDistrictService>(
  'IDistrictService'
);
