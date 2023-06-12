import { Component, Input } from '@angular/core';
import { TableModel } from 'src/app/models/base/TableModel';
import { SortOrders } from 'src/app/models/enum/SortOrders';
import { CommonService } from '../../../services/common.service';

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

  constructor(private common: CommonService) {}
  ngOnInit() {
    if (this.tableModel.items.length != 0) {
      this.pagingConfigure(this.tableModel.items);
    }
  }
  ngOnChanges() {
    if (this.tableModel.items.length != 0) {
      this.pagingConfigure(this.tableModel.items);
    }
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
  }
  private sortShownItems(sortOrder: SortOrders, header: string) {
    this._sortOrder = sortOrder;
    this._sortColumn = header;
    if (this._sortOrder !== SortOrders.None) {
      this.tableModel.items = this.common.sortList(
        this.tableModel.items,
        header,
        this._sortOrder == SortOrders.Ascending
      );
    }
  }

  public pagingConfigure(array: T[]) {
    return Math.ceil(array.length / this._pageSize);
  }
}
