import { TestBed, inject } from '@angular/core/testing';

import { EnseignentService } from './enseignent.service';

describe('EnseignentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnseignentService]
    });
  });

  it('should be created', inject([EnseignentService], (service: EnseignentService) => {
    expect(service).toBeTruthy();
  }));
});
