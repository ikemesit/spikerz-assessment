import { NgOptimizedImage } from '@angular/common';
import { Component, output } from '@angular/core';

@Component({
  selector: 'app-server-notification-node-popover',
  imports: [NgOptimizedImage],
  templateUrl: './server-notification-node-popover.html',
  styleUrl: './server-notification-node-popover.scss',
})
export class ServerNotificationNodePopover {
  close = output<void>();

  onClose() {
    this.close.emit();
  }
}
