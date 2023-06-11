import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav-pill',
  templateUrl: './nav-pill.component.html',
  styleUrls: ['./nav-pill.component.css'],
})
export class NavPillComponent {
  @Input() stages: string[] = [];
  @Input() districtId: number = 0;
  @Output() stageChanged = new EventEmitter<string>();
}
