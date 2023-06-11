import { Component, Inject, Type } from '@angular/core';
import { DistrictModel } from 'src/app/models/DistrictModel';
import { TableModel } from 'src/app/models/base/TableModel';
import {
  DISTRICT_SERVICE_TOKEN,
  IDistrictService,
} from 'src/app/services/district/IDistrictService';
@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css'],
})
export class DistrictComponent {
  constructor(
    @Inject(DISTRICT_SERVICE_TOKEN) private service: IDistrictService
  ) {}

  districtTableData: TableModel<DistrictModel> = {
    hasHeader: true,
    hasPaging: true,
    items: [],
    hasAddNew: true,
    hasSorting: true,
  };
  stage = '';
  expandedRow = 0;
  ngOnInit() {
    this.service
      .getAllDistrict()
      .subscribe((x: DistrictModel[]) => (this.districtTableData.items = x));
  }
  stageChangedHandler(stage: string, districtId: number) {
    console.log(stage);
    this.stage = stage;
    this.expandedRow = districtId;
  }
}
