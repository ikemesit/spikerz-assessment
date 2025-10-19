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
      { id: 'Alpha', text: 'Alpha', color: 'lightblue', icon: '/assets/icons/star.svg' },
      { id: 'Beta', text: 'Beta', color: 'orange', icon: '/assets/icons/circle.svg' },
      { id: 'Gamma', text: 'Gamma', color: 'lightgreen', icon: '/assets/icons/square.svg' },
    ],
    diagramLinkData: [
      { key: 1, from: 'Alpha', to: 'Beta' },
      { key: 2, from: 'Beta', to: 'Gamma' },
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
      mouseHover: (e, obj) => console.log('hovered', obj),
      mouseLeave: (e, obj) => console.log('left', obj),
    }).add(
      // new go.Shape('RoundedRectangle', { stroke: null }).bind('fill', 'color'),
      new go.Picture({
        width: 24,
        height: 24,
        margin: 6,
        imageStretch: go.GraphObject.Uniform, // keep aspect ratio
        background: 'transparent',
      }).bind(new go.Binding('source', 'icon')),
      new go.TextBlock({ margin: 8, editable: true }).bindTwoWay('text', 'text')
    );

    return dia;
  }

  public diagramModelChange = function (changes: go.IncrementalData) {
    console.log(changes);
  };
}
