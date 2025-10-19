import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextualRiskChart } from './contextual-risk-chart';

describe('ContextualRiskChart', () => {
  let component: ContextualRiskChart;
  let fixture: ComponentFixture<ContextualRiskChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContextualRiskChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContextualRiskChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
