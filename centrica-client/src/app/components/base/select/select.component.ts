import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectModel } from 'src/app/models/SelectModel';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent<T> {
  @Input('options') options!: T[];
  @Input('shownField') shownField: string = '';
  @Input('initialItemIndex') initialItemIndex: number = 1;
  @Output('selectedChanged') selectedChanged = new EventEmitter<T>();
  _selectedOption!: number;
  _indexedOptions: SelectModel<T>[] = [];

  ngOnInit() {
    let index = this.initialItemIndex ? this.initialItemIndex : 1;
    this._indexedOptions = this.options.map((data) => ({
      id: index++,
      data: data,
      title: this.processObject(data),
    }));
  }

  processObject(obj: T): string {
    if (typeof obj === 'object' && obj !== null) {
      const key = this.shownField;
      return String((obj as { [key: string]: any })[key]);
    }
    return String(obj);
  }
  changeHandler() {
    this.selectedChanged.emit(
      this._indexedOptions.filter((x) => x.id == this._selectedOption)[0].data
    );
  }
}
