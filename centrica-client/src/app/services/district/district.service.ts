import { Injectable } from '@angular/core';
import { IDistrictService } from './IDistrictService';
import { DistrictModel } from 'src/app/models/DistrictModel';
import { ApiEndpointsService } from '../general/api-endpoints.service';
import { ApiHttpService } from '../general/api-http.service';

@Injectable()
export class DistrictService implements IDistrictService {
  constructor(
    private apiHttpService: ApiHttpService<DistrictModel>,
    private apiEndpointsService: ApiEndpointsService
  ) {}

  public getAllDistrict() {
    return this.apiHttpService.get(this.apiEndpointsService.allDistrict());
  }
  public addDistrict(districtModel: DistrictModel) {
    return this.apiHttpService.post(
      this.apiEndpointsService.allDistrict(),
      districtModel
    );
  }
}
