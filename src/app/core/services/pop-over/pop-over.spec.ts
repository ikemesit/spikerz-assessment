import { TestBed } from '@angular/core/testing';

import { PopOver } from './pop-over';

describe('PopOver', () => {
  let service: PopOver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopOver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
