import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  @Input('pageCount') pageCount: number = 1;
  @Input('selectedPageNumber') selectedPageNumber: number = 1;
  @Output('pageSizeChanged') pageSizeChanged = new EventEmitter<number>();
  @Output('pageNumberChanged') pageNumberChanged = new EventEmitter<number>();
  _nextDisable: boolean = false;
  _previousDisable: boolean = true;

  ngOnInit() {
    this._nextDisable = true;
    this._previousDisable = false;
  }

  previousClickHandler() {
    if (this.selectedPageNumber != 1) {
      this.selectedPageNumber--;
      this.pageNumberChanged.emit(this.selectedPageNumber);
    }
  }
  nextClickHandler() {
    if (this.selectedPageNumber != this.pageCount) {
      this.selectedPageNumber++;
      this.pageNumberChanged.emit(this.selectedPageNumber);
    }
  }
  pageSizeChangedHandler(newSize: number) {
    this.pageSizeChanged.emit(newSize);
    this.selectedPageNumber = 1;
  }
}
