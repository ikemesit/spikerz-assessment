import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { DiagramDisplay } from '../../shared/components/diagram-display/diagram-display';
import { ServerInfoPanel } from '../../shared/components/server-info-panel/server-info-panel';
import { ServerInfoItem } from '../../shared/interfaces/server-info-item.interface';

@Component({
  selector: 'app-home',
  imports: [DiagramDisplay, ServerInfoPanel],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  items: ServerInfoItem[] = [
    {
      id: '1',
      title: 'Lorem P',
      subtitle: 'server',
      type: 'server',
      description: 'lorem ipsum dolor sit amet consectetur',
    },
    {
      id: '2',
      title: 'Lorem S',
      subtitle: 'server',
      type: 'server',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit eius aspernatur quibusdam voluptatibus corporis',
    },
    {
      id: '3',
      title: 'Lorem T',
      subtitle: 'server',
      type: 'server',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit eius aspernatur quibusdam voluptatibus corporis.',
    },
  ];
}
