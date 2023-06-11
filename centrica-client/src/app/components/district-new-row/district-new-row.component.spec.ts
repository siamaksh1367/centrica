import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictNewRowComponent } from './district-new-row.component';

describe('DistrictNewRowComponent', () => {
  let component: DistrictNewRowComponent;
  let fixture: ComponentFixture<DistrictNewRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DistrictNewRowComponent]
    });
    fixture = TestBed.createComponent(DistrictNewRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
