import { Injectable, signal, computed, inject } from '@angular/core';
import { ServerInfoService } from '../services/server-info/server-info';
import { ServerInfoItem } from '../../shared/interfaces/server-info-item.interface';

interface ServerInfoState {
  items: ServerInfoItem[];
  loading: boolean;
  error: string | null;
}

@Injectable({ providedIn: 'root' })
export class ServerInfoStore {
  private service = inject(ServerInfoService);

  private readonly _state = signal<ServerInfoState>({ items: [], loading: false, error: null });

  readonly items = computed(() => this._state().items);
  readonly loading = computed(() => this._state().loading);

  async load(): Promise<void> {
    this._state.update((s) => ({ ...s, loading: true, error: null }));
    try {
      const data = await this.service.getAll();
      this._state.update((s) => ({ ...s, items: data, loading: false }));
    } catch (err) {
      this._state.update((s) => ({ ...s, loading: false, error: String(err) }));
    }
  }
}
