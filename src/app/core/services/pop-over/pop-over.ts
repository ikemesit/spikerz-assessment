import { Injectable, inject } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Popover } from '../../../shared/components/popover/popover';

@Injectable({ providedIn: 'root' })
export class PopoverService {
  private readonly overlay = inject(Overlay);

  openAt(position: { x: number; y: number }, data?: any): OverlayRef {
    console.log(position);

    const posStrat = this.overlay
      .position()
      .global()
      .left(`${Math.round(position.x)}px`)
      .top(`${Math.round(position.y)}px`);

    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      positionStrategy: posStrat,
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      width: '400px',
      minWidth: 180,
    });

    const portal = new ComponentPortal(Popover);
    const compRef = overlayRef.attach(portal);

    compRef.instance.data = data;

    const subClose = compRef.instance.close.subscribe(() => {
      overlayRef.dispose();
      subClose.unsubscribe();
      subBackdrop.unsubscribe();
    });

    const subBackdrop = overlayRef.backdropClick().subscribe(() => {
      overlayRef.dispose();
      subBackdrop.unsubscribe();
      subClose.unsubscribe();
    });

    return overlayRef;
  }
}
