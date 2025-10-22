import { Component, signal } from '@angular/core';
import { ContextualRisk } from '../../interfaces/contextual-risk.interface';
import { ContextualRiskStore } from '../../../core/stores/contextual-risk';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { CommonModule, JsonPipe } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { RiskIndicator } from '../risk-indicator/risk-indicator';
import { MAX_ITEMS_PER_TABLE } from '../../../app.constants';

@Component({
  selector: 'app-contextual-risk-table',
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatTabsModule,
    MatProgressSpinner,
    MatIcon,
    RiskIndicator,
  ],
  templateUrl: './contextual-risk-table.html',
  styleUrl: './contextual-risk-table.scss',
})
export class ContextualRiskTable {
  displayedColumns: string[] = ['icon', 'context', 'severity'];

  dataSource = signal<ContextualRisk[]>([]);
  pageSize = signal(MAX_ITEMS_PER_TABLE);
  currentPage = signal(0);

  totalPages = () => Math.ceil(this.store.count() / this.pageSize());
  getShowingStart = () => this.currentPage() * this.pageSize() + 1;
  getShowingEnd = () => Math.min((this.currentPage() + 1) * this.pageSize(), this.store.count());

  paginatedData = () => {
    const start = this.currentPage() * this.pageSize();
    const end = start + this.pageSize();
    return this.store.items().slice(start, end);
  };

  constructor(public store: ContextualRiskStore) {
    this.dataSource.set(this.store.items());
    this.store.load();
  }

  nextPage(): void {
    if (this.currentPage() < this.totalPages() - 1) {
      this.currentPage.update((page) => page + 1);
    }
  }

  previousPage(): void {
    if (this.currentPage() > 0) {
      this.currentPage.update((page) => page - 1);
    }
  }
}
