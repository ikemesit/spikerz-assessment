import { Injectable } from '@angular/core';
import { AssetRisk } from '../../../shared/interfaces/asset-risk.interface';

@Injectable({ providedIn: 'root' })
export class AssetRiskService {
  private mock: AssetRisk[] = [
    {
      id: 'a1',
      icon: 'server',
      name: 'Loremipsumdolorsit',
      ipAddress: '192.168.1.1',
      riskLevel: 'Critical',
    },
    {
      id: 'a2',
      icon: 'server',
      name: 'Loremipsumdolorsit002',
      ipAddress: '192.168.1.2',
      riskLevel: 'Critical',
    },
  ];

  async getAll(): Promise<AssetRisk[]> {
    // Simulate network latency
    await new Promise((r) => setTimeout(r, 600));
    return [...this.mock];
  }
}
