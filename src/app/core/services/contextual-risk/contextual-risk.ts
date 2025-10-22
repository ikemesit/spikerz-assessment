import { inject, Injectable } from '@angular/core';
import { ContextualRisk } from '../../../shared/interfaces/contextual-risk.interface';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { CONTEXTUAL_RISKS_DATA_URL, SIMULATED_LATENCY_MS } from '../../../app.constants';

@Injectable({
  providedIn: 'root',
})
export class ContextualRiskService {
  private http = inject(HttpClient);

  async getAll(): Promise<ContextualRisk[]> {
    await new Promise((r) => setTimeout(r, SIMULATED_LATENCY_MS));
    return firstValueFrom(this.http.get<ContextualRisk[]>(CONTEXTUAL_RISKS_DATA_URL));
  }
}
