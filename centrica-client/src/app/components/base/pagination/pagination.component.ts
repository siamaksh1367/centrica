import { getLocaleMonthNames } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  @Input() pageCount: number = 1;
  @Input() selectedPage: number = 1;
  @Input() shownPagesCount: number = 3;
  private readonly starting: number = 1;
  _shownPages: number[] = [];
  _nextAvailable: boolean = false;
  _previousAvailable: boolean = false;
  _starPage: number = 1;
  _endPage: number = this.pageCount;

  ngOnInit() {
    this._shownPages = [];
    this._nextAvailable = false;
    this._previousAvailable = false;
    this._starPage = 1;
    this._endPage = this.shownPagesCount;

    this.shownPagesCount = Math.min(this.shownPagesCount, this.pageCount);

    this.assignShownPage();

    if (this._shownPages.includes(this.pageCount)) {
      this._nextAvailable = true;
    }
    if (this._shownPages.includes(this.starting)) {
      this._previousAvailable = true;
    }
  }

  pageChangeHandler($event: any, newPageNumber: number) {
    if (newPageNumber > this.selectedPage) {
      this._endPage = Math.min(
        this.pageCount,
        newPageNumber + Math.ceil(this.shownPagesCount / 2)
      );
      this._starPage = Math.max(
        this.starting,
        this._endPage - this.shownPagesCount
      );
    }
    if (newPageNumber < this.selectedPage) {
      this._starPage = Math.max(
        this.starting,
        newPageNumber - Math.floor(this.shownPagesCount / 2)
      );
      this._endPage = Math.min(
        this.pageCount,
        this._starPage + this.shownPagesCount
      );
    }
    this.selectedPage = newPageNumber;
    this.assignShownPage();
  }
  assignShownPage() {
    this._shownPages = [];
    for (let i = this._starPage; i < this._endPage + 1; i++) {
      this._shownPages.push(i);
    }
    console.log(this._shownPages);
  }
}
