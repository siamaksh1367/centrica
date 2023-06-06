import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent<string>;
  let fixture: ComponentFixture<TableComponent<string>>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableComponent],
    });
    fixture = TestBed.createComponent(TableComponent<'siamak'>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
