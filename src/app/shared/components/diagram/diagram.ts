import { Component, ViewEncapsulation } from '@angular/core';
import * as go from 'gojs';
import { DataSyncService, DiagramComponent } from 'gojs-angular';
import { NodeLayout } from '../../enums/node-layout.enum';

@Component({
  selector: 'app-diagram',
  imports: [DiagramComponent],
  templateUrl: './diagram.html',
  styleUrl: './diagram.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Diagram {
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

  public initDiagram(): go.Diagram {
    const dia = new go.Diagram({
      'undoManager.isEnabled': true,
      isReadOnly: true,
      model: new go.GraphLinksModel({
        nodeKeyProperty: 'id',
        linkKeyProperty: 'key',
      }),
    });

    dia.nodeTemplate = new go.Node(NodeLayout.Vertical, {
      locationSpot: go.Spot.Center,
      movable: false,
      mouseHover: (e, obj) => console.log('hovered', obj),
      mouseLeave: (e, obj) => console.log('left', obj),
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

    return dia;
  }

  public diagramModelChange = function (changes: go.IncrementalData) {
    console.log(changes);
  };
}
