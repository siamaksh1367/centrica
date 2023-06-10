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
      { id: 1, name: 'District 1' },
      { id: 2, name: 'District 2' },
      { id: 3, name: 'District 3' },
      { id: 4, name: 'District 4' },
      { id: 5, name: 'District 5' },
      { id: 6, name: 'District 6' },
      { id: 7, name: 'District 7' },
      { id: 8, name: 'District 8' },
      { id: 9, name: 'District 9' },
      { id: 10, name: 'District 10' },
      { id: 11, name: 'District 11' },
      { id: 12, name: 'District 12' },
      { id: 13, name: 'District 13' },
      { id: 14, name: 'District 14' },
      { id: 15, name: 'District 15' },
      { id: 16, name: 'District 16' },
      { id: 17, name: 'District 17' },
      { id: 18, name: 'District 18' },
    ];
    // Return the dummy data as an obserable;
    return of(districts);
  }
}
