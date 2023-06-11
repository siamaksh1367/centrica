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
  @Input('tableModel') tableModel!: TableModel<T>;
  @Input('rowTemplate') rowTemplate: any;
  @Input('collapseId') collapseId: string = '';
  _headers: string[] = [];
  _sortColumn: string = '';
  _sortOrder: SortOrders = SortOrders.None;
  readonly _sortOrderNone: SortOrders = SortOrders.None;
  _pageSize: number = 5;
  _selectedPageNumber: number = 1;
  _pageCount: number = 1;
  _shownItem: T[] = [];

  constructor(private common: CommonService) {}
  ngOnInit() {
    this.hetHeaders();
    this.pagingConfigure();
  }

  sortClickHandler(sortOrder: SortOrders, header: string) {
    this.sortShownItems(sortOrder, header);
  }

  trackByFn(index: number, item: T): any {
    return index;
  }

  pageSizeChangedHandler(pageSize: number) {
    this._selectedPageNumber = 1;
    this.updatePaging(pageSize);
  }
  pageNumberChangedHandler(pageNumber: number) {
    this._selectedPageNumber = pageNumber;
    this.updatePaging(this._pageSize);
  }

  private updatePaging(pageSize: number) {
    this._pageSize = pageSize;
    this._pageCount = Math.ceil(this.tableModel.items.length / this._pageSize);
    this.limitItems();
  }
  private sortShownItems(sortOrder: SortOrders, header: string) {
    this._sortOrder = sortOrder;
    this._sortColumn = header;
    if (this._sortOrder !== SortOrders.None) {
      this._shownItem = this.common.sortList(
        this._shownItem,
        header,
        this._sortOrder == SortOrders.Ascending
      );
    }
  }

  private pagingConfigure() {
    if (this.tableModel.hasPaging) {
      this.limitItems();
    } else {
      this._shownItem = this.tableModel.items;
    }
    this._pageCount = Math.ceil(this.tableModel.items.length / this._pageSize);
  }

  private hetHeaders() {
    if (this.tableModel.items) {
      this._headers = Object.keys(this.tableModel?.items[0]);
    }
  }
  private limitItems() {
    this._shownItem = this.tableModel.items.slice(
      (this._selectedPageNumber - 1) * this._pageSize,
      this._selectedPageNumber * this._pageSize
    );
  }
}
