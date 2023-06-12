import { ChangeDetectorRef, Component, Injectable } from '@angular/core';
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
    private toastr: ToastrService,
    private cdr: ChangeDetectorRef
  ) {
    this.districtTableData = {
      hasHeader: true,
      hasPaging: true,
      items: [],
      headers: ['id', 'name'],
      hasAddNew: true,
      hasSorting: true,
    };
  }
  districtTableData: TableModel<DistrictModel>;
  stage = '';
  expandedRow = 0;

  async ngOnInit() {
    this.districtTableData.items = await this.service.get();
  }

  async newItemAddedHandler(name: string) {
    let districtModel: DistrictModel = {
      name: name,
    };
    await this.service.post(districtModel);
    this.toastr.success('district Added', 'Done');
    this.cdr.detectChanges();
    this.districtTableData.items = await this.service.get();
  }
  stageChangedHandler(stage: string, districtId: number) {
    console.log(stage);
    this.stage = stage;
    this.expandedRow = districtId;
  }
}
