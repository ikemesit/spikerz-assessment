import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { AssetRisk } from '../../interfaces/asset-risk.interface';

@Component({
  selector: 'app-asset-risk-table',
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatIconModule, MatTabsModule],
  templateUrl: './asset-risk-table.html',
  styleUrl: './asset-risk-table.scss',
})
export class AssetRiskTable {
  displayedColumns: string[] = ['icon', 'asset', 'risk'];

  dataSource = signal<AssetRisk[]>([
    {
      icon: 'server',
      name: 'Loremipsumdolorsit',
      ipAddress: '192.168.1.1',
      riskLevel: 'Critical',
    },
    {
      icon: 'server',
      name: 'Loremipsumdolorsit002',
      ipAddress: '192.168.1.2',
      riskLevel: 'Critical',
    },
  ]);

  pageSize = signal(2);
  currentPage = signal(0);

  totalPages = () => Math.ceil(this.dataSource().length / this.pageSize());

  paginatedData = () => {
    const start = this.currentPage() * this.pageSize();
    const end = start + this.pageSize();
    return this.dataSource().slice(start, end);
  };

  getShowingStart = () => this.currentPage() * this.pageSize() + 1;
  getShowingEnd = () =>
    Math.min((this.currentPage() + 1) * this.pageSize(), this.dataSource().length);

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
