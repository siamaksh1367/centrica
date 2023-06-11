import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalePersonNewRowComponent } from './sale-person-new-row.component';

describe('SalePersonNewRowComponent', () => {
  let component: SalePersonNewRowComponent;
  let fixture: ComponentFixture<SalePersonNewRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalePersonNewRowComponent]
    });
    fixture = TestBed.createComponent(SalePersonNewRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
