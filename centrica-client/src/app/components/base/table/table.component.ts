import { Component, Input } from '@angular/core';
import { TableModel } from 'src/app/models/base/TableModel';
import { SortOrders } from 'src/app/models/enum/SortOrders';

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
  _sortColumn: string = '';
  _sortOrder: SortOrders = SortOrders.None;
  readonly _sortOrderNone: SortOrders = SortOrders.None;

  ngOnInit() {
    if (this.tableModel && this.tableModel.items) {
      this._headers = Object.keys(this.tableModel.items[0]);
    }
  }
  sortClickHandler(sortOrder: SortOrders, header: string) {
    this._sortOrder = sortOrder;
    this._sortColumn = header;
    if (this._sortOrder !== SortOrders.None) {
      this.tableModel.items = this.sortList<T>(
        this.tableModel.items,
        header,
        this._sortOrder == SortOrders.Ascending
      );
    }
  }
  trackByFn(index: number, item: T): any {
    return index;
  }
  sortList<T>(list: T[], key: string, ascending: boolean): T[] {
    return list.sort((a, b) => {
      const valueA = (a as any)[key];
      const valueB = (b as any)[key];
      if (valueA === valueB) {
        return 0;
      }
      if (ascending) {
        return valueA < valueB ? 1 : -1;
      } else if (!ascending) {
        return valueA < valueB ? -1 : 1;
      } else return valueA < valueB ? 1 : -1;
    });
  }
}
