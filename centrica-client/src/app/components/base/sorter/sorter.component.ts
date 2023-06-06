import { Component, EventEmitter, Output } from '@angular/core';
import { SortOrders } from 'src/app/models/enum/SortOrders';

@Component({
  selector: 'app-sorter',
  templateUrl: './sorter.component.html',
  styleUrls: ['./sorter.component.css'],
})
export class SorterComponent {
  sortOrder: SortOrders = SortOrders.None;
  @Output() sortClicked = new EventEmitter<SortOrders>();
  handleBadgeClick() {
    if (this.isNone()) {
      this.sortOrder = SortOrders.Ascending;
    } else if (this.isAscending()) {
      this.sortOrder = SortOrders.Descending;
    } else if (this.isDescending()) this.sortOrder = SortOrders.None;
    this.sortClicked.emit(this.sortOrder);
  }
  isAscending() {
    return this.sortOrder === SortOrders.Ascending;
  }
  isDescending() {
    return this.sortOrder === SortOrders.Descending;
  }
  isNone() {
    return this.sortOrder === SortOrders.None;
  }
}
