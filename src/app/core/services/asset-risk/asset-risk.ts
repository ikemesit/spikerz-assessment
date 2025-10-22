import { inject, Injectable } from '@angular/core';
import { AssetRisk } from '../../../shared/interfaces/asset-risk.interface';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { ASSET_RISKS_DATA_URL, SIMULATED_LATENCY_MS } from '../../../app.constants';

@Injectable({ providedIn: 'root' })
export class AssetRiskService {
  private http = inject(HttpClient);

  async getAll(): Promise<AssetRisk[]> {
    await new Promise((r) => setTimeout(r, SIMULATED_LATENCY_MS));
    return firstValueFrom(this.http.get<AssetRisk[]>(ASSET_RISKS_DATA_URL));
  }
}
