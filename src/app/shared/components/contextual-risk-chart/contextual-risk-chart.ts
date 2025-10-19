import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  signal,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Chart, ArcElement, DoughnutController, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, DoughnutController, Tooltip, Legend);

@Component({
  selector: 'app-contextual-risk-chart',
  templateUrl: './contextual-risk-chart.html',
  styleUrls: ['./contextual-risk-chart.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContextualRiskChart implements AfterViewInit, OnDestroy {
  @ViewChild('donutCanvas') donutCanvas!: ElementRef<HTMLCanvasElement>;

  private chart: Chart | null = null;

  riskData = signal([
    { level: 'Critical', count: 2, color: '#dc2626' },
    { level: 'High', count: 0, color: '#f97316' },
    { level: 'Medium', count: 0, color: '#eab308' },
    { level: 'Low', count: 0, color: '#22c55e' },
  ]);

  totalCritical = signal(2);

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart(): void {
    const ctx = this.donutCanvas.nativeElement.getContext('2d');

    if (ctx) {
      this.chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Critical'],
          datasets: [
            {
              data: [this.totalCritical()],
              backgroundColor: ['#dc2626'],
              borderWidth: 0,
            },
          ],
        },
        options: {
          cutout: '90%',
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: false,
            },
          },
        },
      });
    }
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}
