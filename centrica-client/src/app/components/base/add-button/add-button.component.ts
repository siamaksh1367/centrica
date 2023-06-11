import { Component, Input } from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css'],
})
export class AddButtonComponent {
  @Input('targetCollapse') targetCollapse: string = '';
  _targetCollapse: string = '';
  ngOnInit() {
    this._targetCollapse = `#${this.targetCollapse}`;
  }
}
