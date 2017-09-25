import { TestBed, inject } from '@angular/core/testing';

import { EigoMondaiService } from './eigo-mondai.service';

describe('EigoMondaiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EigoMondaiService]
    });
  });

  it('should be created', inject([EigoMondaiService], (service: EigoMondaiService) => {
    expect(service).toBeTruthy();
  }));
});
