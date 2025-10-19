import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { DiagramDisplay } from '../../shared/components/diagram-display/diagram-display';

@Component({
  selector: 'app-home',
  imports: [MatIcon, DiagramDisplay],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  middleColumnItems = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    title: `Item ${i + 1}`,
    description: `This is the description for item ${i + 1}`,
  }));
}
