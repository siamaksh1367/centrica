import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandButtonComponent } from './expand-button.component';

describe('ExpandButtonComponent', () => {
  let component: ExpandButtonComponent;
  let fixture: ComponentFixture<ExpandButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpandButtonComponent]
    });
    fixture = TestBed.createComponent(ExpandButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
