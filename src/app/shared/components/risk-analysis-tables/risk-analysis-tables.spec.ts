import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskAnalysisTables } from './risk-analysis-tables';

describe('RiskAnalysisTables', () => {
  let component: RiskAnalysisTables;
  let fixture: ComponentFixture<RiskAnalysisTables>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiskAnalysisTables]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiskAnalysisTables);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
