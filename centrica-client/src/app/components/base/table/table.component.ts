import { Component, Input } from '@angular/core';
import { TableModel } from 'src/app/models/TableModel';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent<T> {
  @Input() tableModel!: TableModel<T>;
}
