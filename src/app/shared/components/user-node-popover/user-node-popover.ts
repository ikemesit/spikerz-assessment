import { Component, output } from '@angular/core';

@Component({
  selector: 'app-user-node-popover',
  imports: [],
  templateUrl: './user-node-popover.html',
  styleUrl: './user-node-popover.scss',
})
export class UserNodePopover {
  close = output<void>();

  onClose() {
    this.close.emit();
  }
}
