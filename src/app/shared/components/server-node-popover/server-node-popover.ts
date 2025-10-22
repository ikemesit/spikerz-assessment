import { Component, output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-server-node-popover',
  imports: [NgOptimizedImage],
  templateUrl: './server-node-popover.html',
  styleUrl: './server-node-popover.scss',
})
export class ServerNodePopover {
  close = output<void>();

  onClose() {
    this.close.emit();
  }
}
