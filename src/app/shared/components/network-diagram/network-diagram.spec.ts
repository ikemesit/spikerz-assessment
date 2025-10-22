import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkDiagram } from './network-diagram';

describe('Diagram', () => {
  let component: NetworkDiagram;
  let fixture: ComponentFixture<NetworkDiagram>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworkDiagram],
    }).compileComponents();

    fixture = TestBed.createComponent(NetworkDiagram);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
