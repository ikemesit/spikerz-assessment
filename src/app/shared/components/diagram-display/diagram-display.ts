import { Component } from '@angular/core';
import { Diagram } from '../diagram/diagram';
import { ContextualRiskChart } from '../contextual-risk-chart/contextual-risk-chart';
import { AssetRiskTable } from '../asset-risk-table/asset-risk-table';

@Component({
  selector: 'app-diagram-display',
  imports: [Diagram, ContextualRiskChart, AssetRiskTable],
  templateUrl: './diagram-display.html',
  styleUrl: './diagram-display.scss',
})
export class DiagramDisplay {}
