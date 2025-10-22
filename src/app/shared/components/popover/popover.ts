import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.html',
  styleUrl: './popover.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Popover {
  data = input<any | undefined>(undefined);
  close = output<void>();

  onClose() {
    this.close.emit();
  }
}
