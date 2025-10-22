import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskIndicator } from './risk-indicator';

describe('RiskIndicator', () => {
  let component: RiskIndicator;
  let fixture: ComponentFixture<RiskIndicator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiskIndicator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiskIndicator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
