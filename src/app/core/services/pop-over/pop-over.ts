import { Injectable, inject } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { DiagramNode } from '../../../shared/interfaces/diagram-node.interface';
import { UserNodePopover } from '../../../shared/components/user-node-popover/user-node-popover';
import { ServerNodePopover } from '../../../shared/components/server-node-popover/server-node-popover';
import { ServerNotificationNodePopover } from '../../../shared/components/server-notification-node-popover/server-notification-node-popover';

@Injectable({ providedIn: 'root' })
export class PopoverService {
  private readonly overlay = inject(Overlay);

  openAt(position: { x: number; y: number }, data?: DiagramNode): OverlayRef {
    console.log(position);
    console.log(data?.type);

    const posStrat = this.overlay
      .position()
      .flexibleConnectedTo(position)
      .withPositions([
        {
          originX: 'end',
          originY: 'bottom',
          overlayX: 'center',
          overlayY: 'top',
        },
      ])
      .withPush(false)
      .withViewportMargin(50);

    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      positionStrategy: posStrat,
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      width: '400px',
      minWidth: 180,
    });

    let portal;

    if (data?.type === 'user') {
      portal = new ComponentPortal(UserNodePopover);
    } else if (data?.type === 'server') {
      portal = new ComponentPortal(ServerNodePopover);
    } else if (data?.type === 'server-notification') {
      portal = new ComponentPortal(ServerNotificationNodePopover);
    }

    const compRef = overlayRef.attach(portal);

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
