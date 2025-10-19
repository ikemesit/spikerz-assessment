import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { AssetRisk } from '../../interfaces/asset-risk.interface';
import { AssetRiskStore } from '../../../core/stores/asset-risk';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-asset-risk-table',
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatTabsModule,
    MatProgressSpinner,
  ],
  templateUrl: './asset-risk-table.html',
  styleUrl: './asset-risk-table.scss',
})
export class AssetRiskTable {
  displayedColumns: string[] = ['icon', 'asset', 'risk'];
  dataSource = signal<AssetRisk[]>([]);

  constructor(public store: AssetRiskStore) {
    this.store.load();
    this.dataSource.set(this.store.items());
  }

  pageSize = signal(2);
  currentPage = signal(0);

  totalPages = () => Math.ceil(this.store.count() / this.pageSize());

  paginatedData = () => {
    const start = this.currentPage() * this.pageSize();
    const end = start + this.pageSize();
    return this.store.items().slice(start, end);
  };

  getShowingStart = () => this.currentPage() * this.pageSize() + 1;
  getShowingEnd = () => Math.min((this.currentPage() + 1) * this.pageSize(), this.store.count());

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
