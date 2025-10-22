import { Component, input } from '@angular/core';
import { Severity } from '../../enums/severity.enum';

@Component({
  selector: 'app-risk-indicator',
  imports: [],
  templateUrl: './risk-indicator.html',
  styleUrl: './risk-indicator.scss',
})
export class RiskIndicator {
  severity = input<'low' | 'medium' | 'high' | 'critical'>();
  SeverityType = Severity;
}
