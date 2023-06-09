import { Component, Input } from '@angular/core';
import { TableModel } from 'src/app/models/TableModel';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  template: ``,
})
export class TableComponent<T extends object> {
  @Input() tableModel!: TableModel<T>;
  @Input() rowTemplate: any;
  _headers: string[] = [];

  ngOnInit() {
    if (this.tableModel && this.tableModel.items) {
      this._headers = Object.keys(this.tableModel.items[0]);
    }
  }
  trackByFn(index: number, item: T): any {
    return index;
  }
}
