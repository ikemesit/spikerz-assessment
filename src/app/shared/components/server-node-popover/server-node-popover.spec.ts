import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerNodePopover } from './server-node-popover';

describe('ServerNodePopover', () => {
  let component: ServerNodePopover;
  let fixture: ComponentFixture<ServerNodePopover>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServerNodePopover]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerNodePopover);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
