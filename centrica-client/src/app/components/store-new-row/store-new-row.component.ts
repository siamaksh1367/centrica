import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-store-new-row',
  templateUrl: './store-new-row.component.html',
  styleUrls: ['./store-new-row.component.css'],
})
export class StoreNewRowComponent {
  @Output() newItemAdded = new EventEmitter<string>();
  name: string = '';

  onSubmit() {
    this.newItemAdded.emit(this.name);
  }
}
