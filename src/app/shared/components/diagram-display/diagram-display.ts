import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Diagram } from '../diagram/diagram';

@Component({
  selector: 'app-diagram-display',
  imports: [MatIcon, Diagram],
  templateUrl: './diagram-display.html',
  styleUrl: './diagram-display.scss',
})
export class DiagramDisplay {}
