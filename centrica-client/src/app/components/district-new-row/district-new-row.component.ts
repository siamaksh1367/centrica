import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-district-new-row',
  templateUrl: './district-new-row.component.html',
  styleUrls: ['./district-new-row.component.css'],
})
export class DistrictNewRowComponent {
  @Output() newItemAdded = new EventEmitter<string>();
  name: string = '';

  onSubmit() {
    this.newItemAdded.emit(this.name);
  }
}
