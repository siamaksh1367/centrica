import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  @Input('pageSize') pageSize: number = 1;
  @Input('pageCount') pageCount: number = 1;
  @Input('selectedPageNumber') selectedPageNumber: number = 1;
  @Input('showPageCount') showPageCount: number = 3;
  @Input('pagination') pagination: number[] = [1, 5, 10];

  @Output('pageSizeChanged') pageSizeChanged = new EventEmitter<number>();
  private readonly starting: number = 1;
  _shownPages: number[] = [];
  _nextDisable: boolean = false;
  _previousDisable: boolean = false;
  _starPage: number = 1;
  _endPage: number = this.pageCount;
  ngOnInit() {
    this._shownPages = [];
    this._nextDisable = false;
    this._previousDisable = false;
    this._starPage = 1;
    this._endPage = this.showPageCount;
    this.assignShownPage(1);
  }

  pageChangeHandler(newPageNumber: number) {
    this.assignShownPage(newPageNumber);
  }
  assignShownPage(newPageNumber: number) {
    this._shownPages = [];
    for (let i = this._starPage; i < this._endPage + 1; i++) {
      this._shownPages.push(i);
    }
    if (this._shownPages.includes(this.pageCount)) {
      this._nextDisable = true;
    } else this._nextDisable = false;
    if (this._shownPages.includes(this.starting)) {
      this._previousDisable = true;
    } else this._previousDisable = false;
    this.selectedPageNumber = newPageNumber;
  }
  previousClickHandler() {
    this._starPage = Math.max(
      this.starting,
      this._starPage - this.showPageCount
    );
    this._endPage = Math.min(
      this.pageCount,
      this._starPage + this.showPageCount - 1
    );
    this.assignShownPage(this._endPage);
  }
  nextClickHandler() {
    this._endPage = Math.min(
      this.pageCount,
      this._endPage + this.showPageCount
    );
    this._starPage = Math.max(
      this.starting,
      this._endPage - this.showPageCount + 1
    );
    this.assignShownPage(this._starPage);
  }
  pageSizeChangedHandler(newSize: number) {
    this.pageSizeChanged.emit(newSize);
  }
}
