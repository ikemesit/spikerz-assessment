import { Component } from '@angular/core';
import { MatTab, MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-risk-analysis-tables',
  imports: [MatTab, MatTabGroup],
  templateUrl: './risk-analysis-tables.html',
  styleUrl: './risk-analysis-tables.scss',
})
export class RiskAnalysisTables {}
