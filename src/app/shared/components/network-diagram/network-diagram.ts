import { Component, ElementRef, inject, viewChild, ViewEncapsulation } from '@angular/core';
import * as go from 'gojs';
import { DiagramComponent } from 'gojs-angular';
import { NodeLayout } from '../../enums/node-layout.enum';
import { PopoverService } from '../../../core/services/pop-over/pop-over';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-network-diagram',
  imports: [DiagramComponent],
  templateUrl: './network-diagram.html',
  styleUrl: './network-diagram.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class NetworkDiagram {
  renderedDia = viewChild<ElementRef<HTMLElement>>('goDiagram');
  popoverService = inject(PopoverService);

  state = {
    diagramNodeData: [
      {
        id: 'node1',
        text: 'Loremipsumm',
        ip: '',
        type: 'user',
        icon: 'icons/user.png',
      },
      {
        id: 'node2',
        text: 'LoremIpsum2',
        ip: '',
        type: 'server',
        icon: 'icons/server.png',
      },
      {
        id: 'node3',
        text: 'LoremIpsum3',
        ip: '',
        type: 'server',
        icon: 'icons/server.png',
      },
      {
        id: 'node4',
        text: 'LoremIpsum4',
        ip: '192.168.1.1',
        type: 'server-notification',
        icon: 'icons/server-with-notification.png',
      },
      {
        id: 'node5',
        text: 'LoremIpsum5',
        ip: '192.168.1.2',
        type: 'server-notification',
        icon: 'icons/server-with-notification.png',
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

  diagramDivClassName: string = 'myDiagramDiv';

  initDiagram = () => {
    const goDiagram = new go.Diagram({
      'undoManager.isEnabled': true,
      isReadOnly: true,
      layout: new go.TreeLayout({ angle: 0, layerSpacing: 35 }),
      model: new go.GraphLinksModel({
        nodeKeyProperty: 'id',
        linkKeyProperty: 'key',
      }),
    });

    goDiagram.nodeTemplate = new go.Node(NodeLayout.Vertical, {
      locationSpot: go.Spot.Center,
      movable: false,
    }).add(
      new go.Picture({
        width: 48,
        height: 48,
        margin: 6,
        imageStretch: go.ImageStretch.Uniform,
        background: 'transparent',
      }).bind('source', 'icon'),
      new go.TextBlock({ margin: 2, editable: false }).bindTwoWay('text', 'text'),
      new go.TextBlock({ margin: 2, editable: false }).bindTwoWay('text', 'ip')
    );

    goDiagram.linkTemplate = new go.Link({ routing: go.Routing.Orthogonal, corner: 5 }).add(
      new go.Shape({ strokeWidth: 1, stroke: '#333' }),
      new go.Shape({ toArrow: 'Standard', strokeWidth: 0 })
    );

    goDiagram.allowMove = false;
    goDiagram.autoScale = go.AutoScale.UniformToFill;

    goDiagram.addDiagramListener('ObjectSingleClicked', (e: go.DiagramEvent) => {
      const part = e.subject.part as go.Node;
      if (!part) return;
      const data = part.data;

      const vp = e.diagram.lastInput.viewPoint;
      const rect = (e.diagram.div as HTMLDivElement).getBoundingClientRect();
      const client = { x: Math.round(rect.left + vp.x), y: Math.round(rect.top + vp.y) };

      this.popoverService.openAt({ x: client.x, y: client.y }, data);
    });

    return goDiagram;
  };

  diagramModelChange(changes: go.IncrementalData) {
    console.log(changes);
  }
}
