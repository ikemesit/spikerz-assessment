import { computed, inject, Injectable, signal } from '@angular/core';
import { ContextualRiskService } from '../services/contextual-risk/contextual-risk';
import { ContextualRisk } from '../../shared/interfaces/contextual-risk.interface';

interface ContextualRiskState {
  items: ContextualRisk[];
  loading: boolean;
  error: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class ContextualRiskStore {
  private service = inject(ContextualRiskService);

  private readonly _state = signal<ContextualRiskState>({
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

  readonly count = computed(() => this._state().items.length);
  readonly highRiskItems = computed(() =>
    this._state().items.filter((i) => ((i as any).score ?? 0) >= 75)
  );
}
