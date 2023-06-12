import { TestBed } from '@angular/core/testing';

import { SalePersonService } from './sale-person.service';

describe('SalePersonService', () => {
  let service: SalePersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalePersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
