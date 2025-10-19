import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerInfoPanel } from './server-info-panel';

describe('ServerInfoPanel', () => {
  let component: ServerInfoPanel;
  let fixture: ComponentFixture<ServerInfoPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServerInfoPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerInfoPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
