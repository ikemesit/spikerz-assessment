import { Component, input, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { CdkAccordion, CdkAccordionItem } from '@angular/cdk/accordion';
import { ServerInfoItem } from '../../interfaces/server-info-item.interface';

@Component({
  selector: 'app-server-info-panel',
  imports: [MatExpansionModule, CdkAccordion, CdkAccordionItem],
  templateUrl: './server-info-panel.html',
  styleUrl: './server-info-panel.scss',
})
export class ServerInfoPanel {
  item = input<ServerInfoItem>();

  getIntroText(description?: string): string {
    return description ? description.split('.')[0] : '';
  }
}
