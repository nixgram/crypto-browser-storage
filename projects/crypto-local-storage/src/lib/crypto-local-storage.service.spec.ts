import { TestBed } from '@angular/core/testing';

import { CryptoLocalStorageService } from './crypto-local-storage.service';

describe('CryptoLocalStorageService', () => {
  let service: CryptoLocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptoLocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
