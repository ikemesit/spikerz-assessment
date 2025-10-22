import { TestBed } from '@angular/core/testing';

import { ContextualRisk } from './contextual-risk';

describe('ContextualRisk', () => {
  let service: ContextualRisk;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContextualRisk);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
