import { Component } from '@angular/core';
import { NetworkDiagram } from '../network-diagram/network-diagram';
import { ContextualRiskChart } from '../contextual-risk-chart/contextual-risk-chart';
import { AssetRiskTable } from '../asset-risk-table/asset-risk-table';
import { RiskAnalysisTables } from '../risk-analysis-tables/risk-analysis-tables';
import { ContextualRiskTable } from '../contextual-risk-table/contextual-risk-table';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-diagram-display',
  imports: [
    NetworkDiagram,
    ContextualRiskChart,
    AssetRiskTable,
    RiskAnalysisTables,
    ContextualRiskTable,
    NgOptimizedImage,
  ],
  templateUrl: './diagram-display.html',
  styleUrl: './diagram-display.scss',
})
export class DiagramDisplay {}
