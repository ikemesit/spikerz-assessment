import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetRiskTable } from './asset-risk-table';

describe('AssetRiskTable', () => {
  let component: AssetRiskTable;
  let fixture: ComponentFixture<AssetRiskTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetRiskTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetRiskTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
