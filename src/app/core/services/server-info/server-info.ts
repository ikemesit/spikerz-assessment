import { Injectable } from '@angular/core';
import { ServerInfoItem } from '../../../shared/interfaces/server-info-item.interface';

@Injectable({ providedIn: 'root' })
export class ServerInfoService {
  private mock: ServerInfoItem[] = [
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

  async getAll(): Promise<ServerInfoItem[]> {
    await new Promise((r) => setTimeout(r, 1600));
    return [...this.mock];
  }
}
