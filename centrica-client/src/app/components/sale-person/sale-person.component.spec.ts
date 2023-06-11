import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalePersonComponent } from './sale-person.component';

describe('SalePersonComponent', () => {
  let component: SalePersonComponent;
  let fixture: ComponentFixture<SalePersonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalePersonComponent]
    });
    fixture = TestBed.createComponent(SalePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
