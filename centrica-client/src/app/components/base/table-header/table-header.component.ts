import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.css'],
})
export class TableHeaderComponent {
  @Input() content: string = '';
  @Input() sortable: boolean = false;
}
