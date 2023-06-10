import { Component, Input } from '@angular/core';
import { TableModel } from 'src/app/models/base/TableModel';
import { SortOrders } from 'src/app/models/enum/SortOrders';
import { CommonService } from './../../../services/common.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent<T extends object> {
  @Input() tableModel!: TableModel<T>;
  @Input() rowTemplate: any;
  _headers: string[] = [];
  _sortColumn: string = '';
  _sortOrder: SortOrders = SortOrders.None;
  readonly _sortOrderNone: SortOrders = SortOrders.None;
  _pageSize: number = 3;
  _selectedPageNumber: number = 1;
  _pageCount: number = 1;
  _shownItem: T[] = [];

  constructor(private common: CommonService) {}
  ngOnInit() {
    if (this.tableModel.items) {
      this._headers = Object.keys(this.tableModel?.items[0]);
    }
    if (this.tableModel.hasPaging) {
      this._shownItem = this.tableModel.items.slice(
        (this._selectedPageNumber - 1) * this._pageSize,
        this._pageSize
      );
    } else {
      this._shownItem = this.tableModel.items;
    }
  }
  sortClickHandler(sortOrder: SortOrders, header: string) {
    this._sortOrder = sortOrder;
    this._sortColumn = header;
    if (this._sortOrder !== SortOrders.None) {
      this.tableModel.items = this.common.sortList(
        this.tableModel?.items,
        header,
        this._sortOrder == SortOrders.Ascending
      );
    }
  }
  trackByFn(index: number, item: T): any {
    return index;
  }

  pageSizeChangedHandler(pageSize: number) {
    this._pageSize = pageSize;
    this._selectedPageNumber = 1;
    this._pageCount = this.tableModel.items.length;
  }
}
