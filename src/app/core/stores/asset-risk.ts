import { Injectable, signal, computed, inject } from '@angular/core';
import { AssetRisk } from '../../shared/interfaces/asset-risk.interface';
import { AssetRiskService } from '../services/asset-risk/asset-risk';

interface AssetRiskState {
  items: AssetRisk[];
  loading: boolean;
  error: string | null;
}

@Injectable({ providedIn: 'root' })
export class AssetRiskStore {
  private service = inject(AssetRiskService);

  private readonly _state = signal<AssetRiskState>({
    items: [],
    loading: false,
    error: null,
  });

  readonly items = computed(() => this._state().items);
  readonly loading = computed(() => this._state().loading);
  readonly error = computed(() => this._state().error);

  async load(): Promise<void> {
    this._state.update((s) => ({ ...s, loading: true, error: null }));
    try {
      const data = await this.service.getAll();
      this._state.update((s) => ({ ...s, items: data, loading: false }));
    } catch (err) {
      this._state.update((s) => ({ ...s, loading: false, error: String(err) }));
    }
  }

  // Convenience selectors
  readonly count = computed(() => this._state().items.length);
  readonly highRiskItems = computed(() =>
    this._state().items.filter((i) => ((i as any).score ?? 0) >= 75)
  );
}
