import { Component } from '@angular/core';
import { Diagram } from '../diagram/diagram';
import { ContextualRiskChart } from '../contextual-risk-chart/contextual-risk-chart';
import { AssetRiskTable } from '../asset-risk-table/asset-risk-table';
import { RiskAnalysisTables } from '../risk-analysis-tables/risk-analysis-tables';
import { ContextualRiskTable } from '../contextual-risk-table/contextual-risk-table';

@Component({
  selector: 'app-diagram-display',
  imports: [Diagram, ContextualRiskChart, AssetRiskTable, RiskAnalysisTables, ContextualRiskTable],
  templateUrl: './diagram-display.html',
  styleUrl: './diagram-display.scss',
})
export class DiagramDisplay {
  logClick(event: { x: number; y: number; data?: any }) {
    console.log(event);
  }
}
