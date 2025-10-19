import { TestBed } from '@angular/core/testing';

import { AssetRiskService } from './asset-risk';

describe('AssetRiskService', () => {
  let service: AssetRiskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetRiskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
