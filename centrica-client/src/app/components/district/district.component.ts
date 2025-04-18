import { Component, Injectable } from '@angular/core';
import { DistrictModel } from 'src/app/models/DistrictModel';
import { TableModel } from 'src/app/models/base/TableModel';
import { DistrictService } from 'src/app/services/district/district.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css'],
})
@Injectable()
export class DistrictComponent {
  constructor(
    private service: DistrictService,
    private toastr: ToastrService
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
  _render: boolean = true;
  ngOnInit() {
    this.service
      .get()
      .subscribe((x: DistrictModel[]) => (this.districtTableData.items = x));
  }

  newItemAddedHandler(name: string) {
    let districtModel: DistrictModel = {
      name: name,
    };
    this.service.post(districtModel).subscribe(
      (x) => {
        this.toastr.success('Success message', 'Success');
        this.districtTableData = { ...this.districtTableData };
      },
      (x) => {
        this.toastr.error('Failed message', 'Failed');
      },
      () => {
        console.log('Complete');
      }
    );
  }
  stageChangedHandler(stage: string, districtId: number) {
    console.log(stage);
    this.stage = stage;
    this.expandedRow = districtId;
  }
}
