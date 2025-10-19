import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { DiagramDisplay } from '../../shared/components/diagram-display/diagram-display';
import { ServerInfoPanel } from '../../shared/components/server-info-panel/server-info-panel';
import { ServerInfoItem } from '../../shared/interfaces/server-info-item.interface';
import { ServerInfoStore } from '../../core/stores/server-info';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-home',
  imports: [DiagramDisplay, ServerInfoPanel, MatProgressSpinner],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  constructor(public serverInfoStore: ServerInfoStore) {
    this.serverInfoStore.load();
  }
}
