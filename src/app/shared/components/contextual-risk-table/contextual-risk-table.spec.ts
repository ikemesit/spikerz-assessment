import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextualRiskTable } from './contextual-risk-table';

describe('ContextualRiskTable', () => {
  let component: ContextualRiskTable;
  let fixture: ComponentFixture<ContextualRiskTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContextualRiskTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContextualRiskTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
