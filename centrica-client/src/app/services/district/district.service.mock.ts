import { Injectable } from '@angular/core';
import { Observable, firstValueFrom, lastValueFrom, of } from 'rxjs';
import { DistrictModel } from 'src/app/models/DistrictModel';
import { ApiHttpService } from '../general/api-http.service';

@Injectable()
export class DistrictServiceMoq extends ApiHttpService<DistrictModel> {
  constructor() {
    const mockHttpClient: any = {
      get: () => of([]),
      post: () => of({}),
      put: () => of({}),
      delete: () => of({}),
    };
    const mockConstants: any = {};
    super(mockConstants, mockHttpClient, 'district');
  }
  districts: DistrictModel[] = [
    { id: 1, name: 'District 1' },
    { id: 2, name: 'District 2' },
    { id: 3, name: 'District 3' },
    // { id: 4, name: 'District 4' },
    // { id: 5, name: 'District 5' },
    // { id: 6, name: 'District 6' },
    // { id: 7, name: 'District 7' },
    // { id: 8, name: 'District 8' },
    // { id: 9, name: 'District 9' },
    // { id: 10, name: 'District 10' },
    // { id: 11, name: 'District 11' },
    // { id: 12, name: 'District 12' },
    // { id: 13, name: 'District 13' },
    // { id: 14, name: 'District 14' },
    // { id: 15, name: 'District 15' },
    // { id: 16, name: 'District 16' },
    // { id: 17, name: 'District 17' },
    // { id: 18, name: 'District 18' },
  ];

  public override async get(): Promise<DistrictModel[]> {
    return new Promise((resolve, reject) => {
      resolve(this.districts); // or reject(error) for rejecting the Promise
    });
  }
  public override async post(data: DistrictModel): Promise<DistrictModel> {
    data.id = this.districts.length + 1;
    this.districts.push({
      id: this.districts.length + 1,
      name: data.name,
    });
    return new Promise((resolve, reject) => {
      resolve(data);
    });
  }
}
