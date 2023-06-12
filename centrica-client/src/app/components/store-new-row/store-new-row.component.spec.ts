import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreNewRowComponent } from './store-new-row.component';

describe('StoreNewRowComponent', () => {
  let component: StoreNewRowComponent;
  let fixture: ComponentFixture<StoreNewRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoreNewRowComponent]
    });
    fixture = TestBed.createComponent(StoreNewRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
