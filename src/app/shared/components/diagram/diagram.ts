import {
  AfterViewInit,
  Component,
  ElementRef,
  output,
  viewChild,
  ViewEncapsulation,
} from '@angular/core';
import * as go from 'gojs';
import { DiagramComponent } from 'gojs-angular';
import { NodeLayout } from '../../enums/node-layout.enum';
import { PopoverService } from '../../../core/services/pop-over/pop-over';

@Component({
  selector: 'app-diagram',
  imports: [DiagramComponent],
  templateUrl: './diagram.html',
  styleUrl: './diagram.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Diagram implements AfterViewInit {
  renderedDia = viewChild<ElementRef<HTMLElement>>('goDiagram');

  public state = {
    diagramNodeData: [
      {
        id: 'node1',
        text: 'LoremIpsum',
        color: 'lightblue',
        icon: 'user.png',
      },
      {
        id: 'node2',
        text: 'LoremIpsum2',
        color: 'orange',
        icon: 'server.png',
      },
      {
        id: 'node3',
        text: 'LoremIpsum3',
        color: 'lightgreen',
        icon: 'server.png',
      },
      {
        id: 'node4',
        text: 'LoremIpsum4',
        color: 'lightgreen',
        icon: 'server-with-notification.png',
      },
      {
        id: 'node5',
        text: 'LoremIpsum5',
        color: 'lightgreen',
        icon: 'server-with-notification.png',
      },
    ],
    diagramLinkData: [
      { key: 1, from: 'node1', to: 'node2' },
      { key: 2, from: 'node2', to: 'node3' },
      { key: 3, from: 'node3', to: 'node4' },
      { key: 4, from: 'node3', to: 'node5' },
    ],
    diagramModelData: { prop: 'value' },
    skipsDiagramUpdate: false,
  };

  public diagramDivClassName: string = 'myDiagramDiv';
  public nodeclick = output<{ x: number; y: number; data?: any }>();

  ngAfterViewInit(): void {}

  public initDiagram(): go.Diagram {
    const dia = new go.Diagram({
      'undoManager.isEnabled': true,
      isReadOnly: true,
      layout: new go.TreeLayout({ angle: 0, layerSpacing: 35 }),
      model: new go.GraphLinksModel({
        nodeKeyProperty: 'id',
        linkKeyProperty: 'key',
      }),
    });

    dia.nodeTemplate = new go.Node(NodeLayout.Vertical, {
      locationSpot: go.Spot.Center,
      movable: false,
      click: (e: go.InputEvent, thisObj: go.GraphObject) => {
        try {
          const nodeData = thisObj?.position;
          let clientX = 0;
          let clientY = 0;

          if (nodeData != null) {
            clientX = nodeData.x;
            clientY = nodeData.y;
          } else {
            const el = document.querySelector(`.${this.diagramDivClassName}`) as HTMLElement | null;
            if (el) {
              const r = el.getBoundingClientRect();
              clientX = Math.round(r.left + r.width / 2);
              clientY = Math.round(r.top + 20);
            } else {
              clientX = Math.round(window.innerWidth / 2);
              clientY = Math.round(window.innerHeight / 2);
            }
          }
        } catch (err) {
          console.error('Error opening popover:', err);
        }
      },
    }).add(
      new go.Picture({
        width: 48,
        height: 48,
        margin: 6,
        imageStretch: go.ImageStretch.Uniform,
        background: 'transparent',
      }).bind('source', 'icon'),
      new go.TextBlock({ margin: 8, editable: false }).bindTwoWay('text', 'text')
    );

    dia.linkTemplate = new go.Link({ routing: go.Routing.Orthogonal, corner: 5 }).add(
      new go.Shape({ strokeWidth: 1, stroke: '#555' }),
      new go.Shape({ toArrow: 'Standard', strokeWidth: 0 })
    );

    dia.allowMove = false;
    dia.autoScale = go.AutoScale.Uniform;

    return dia;
  }

  public diagramModelChange = function (changes: go.IncrementalData) {
    console.log(changes);
  };
}
