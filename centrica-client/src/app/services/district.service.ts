import { Injectable } from '@angular/core';
import { ApiHttpService } from './general/api-http.service';
import { ApiEndpointsService } from './general/api-endpoints.service';
import { DistrictModel } from '../models/DistrictModel';

@Injectable({
  providedIn: 'root',
})
export class DistrictService {
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
