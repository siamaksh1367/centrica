import { Component, Inject, Injectable, Type } from '@angular/core';
import { DistrictModel } from 'src/app/models/DistrictModel';
import { TableModel } from 'src/app/models/base/TableModel';
import { DistrictService } from 'src/app/services/district/district.service';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css'],
})
@Injectable()
export class DistrictComponent {
  constructor(private service: DistrictService) {}
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
      .get()
      .subscribe((x: DistrictModel[]) => (this.districtTableData.items = x));
  }
  stageChangedHandler(stage: string, districtId: number) {
    console.log(stage);
    this.stage = stage;
    this.expandedRow = districtId;
  }
}
