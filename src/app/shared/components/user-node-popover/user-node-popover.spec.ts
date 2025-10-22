import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNodePopover } from './user-node-popover';

describe('UserNodePopover', () => {
  let component: UserNodePopover;
  let fixture: ComponentFixture<UserNodePopover>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserNodePopover]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserNodePopover);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
