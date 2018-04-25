import { TestBed, inject } from '@angular/core/testing';

import { JewelleryService } from './jewellery.service';

describe('JewelleryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JewelleryService]
    });
  });

  it('should be created', inject([JewelleryService], (service: JewelleryService) => {
    expect(service).toBeTruthy();
  }));
});
