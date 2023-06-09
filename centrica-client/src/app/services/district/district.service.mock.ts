import { Injectable } from '@angular/core';
import { IDistrictService } from './IDistrictService';
import { Observable, of } from 'rxjs';
import { DistrictModel } from 'src/app/models/DistrictModel';

Injectable();
export class DistrictServiceMoq implements IDistrictService {
  constructor() {}
  addDistrict(districtModel: DistrictModel): Observable<DistrictModel> {
    throw new Error('Method not implemented.');
  }

  public getAllDistrict() {
    // Dummy data
    const districts: DistrictModel[] = [
      { id: 1, name: 'District A' },
      { id: 2, name: 'District B' },
      { id: 3, name: 'District C' },
    ];

    // Return the dummy data as an observable
    return of(districts);
  }
}
