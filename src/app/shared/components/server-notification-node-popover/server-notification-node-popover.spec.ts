import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerNotificationNodePopover } from './server-notification-node-popover';

describe('ServerNotificationNodePopover', () => {
  let component: ServerNotificationNodePopover;
  let fixture: ComponentFixture<ServerNotificationNodePopover>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServerNotificationNodePopover]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerNotificationNodePopover);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
