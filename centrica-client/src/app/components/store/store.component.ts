import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { StoreModel } from 'src/app/models/StoreModel';
import { TableModel } from 'src/app/models/base/TableModel';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent {
  constructor(private service: StoreService, private toastr: ToastrService) {
    this.storeTableData = {
      hasHeader: true,
      hasPaging: false,
      items: [],
      headers: ['id', 'name'],
      hasAddNew: true,
      hasSorting: false,
    };
  }
  storeTableData: TableModel<StoreModel>;
  stage = '';
  expandedRow = 0;

  async ngOnInit() {
    this.storeTableData.items = await this.service.get();
  }

  async newItemAddedHandler(name: string, districtId: number) {
    let storeModel: StoreModel = {
      name: name,
      districtId: districtId,
    };
    await this.service.post(storeModel);
    this.toastr.success('district Added', 'Done');
    this.storeTableData.items = await this.service.get();
  }
}
