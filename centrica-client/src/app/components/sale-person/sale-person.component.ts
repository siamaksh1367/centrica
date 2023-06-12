import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SalePersonModel } from 'src/app/models/SalePersonModel';
import { TableModel } from 'src/app/models/base/TableModel';
import { SalePersonService } from 'src/app/services/sale-person.service';

@Component({
  selector: 'app-sale-person',
  templateUrl: './sale-person.component.html',
  styleUrls: ['./sale-person.component.css'],
})
export class SalePersonComponent {
  constructor(
    private service: SalePersonService,
    private toastr: ToastrService
  ) {
    this.salePersonTableData = {
      hasHeader: true,
      hasPaging: false,
      items: [],
      headers: ['id', 'name', 'isPrimary'],
      hasAddNew: true,
      hasSorting: false,
    };
  }
  salePersonTableData: TableModel<SalePersonModel>;

  async ngOnInit() {
    this.salePersonTableData.items = await this.service.get();
  }

  async newItemAddedHandler(salePersonModel: SalePersonModel) {
    await this.service.post(salePersonModel);
    this.toastr.success('salePerson Added', 'Done');
    this.salePersonTableData.items = await this.service.get();
  }
}
