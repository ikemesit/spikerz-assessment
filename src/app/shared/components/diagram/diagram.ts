import { Component, ViewEncapsulation } from '@angular/core';
import * as go from 'gojs';
import { DataSyncService, DiagramComponent } from 'gojs-angular';

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
      { id: 'Alpha', text: 'Alpha', color: 'lightblue' },
      { id: 'Beta', text: 'Beta', color: 'orange' },
      { id: 'Gamma', text: 'Gamma', color: 'lightgreen' },
    ],
    diagramLinkData: [{ key: -1, from: 'Alpha', to: 'Beta' }],
    diagramModelData: { prop: 'value' },
    skipsDiagramUpdate: false,
  }; // end state object

  public diagramDivClassName: string = 'myDiagramDiv';

  public initDiagram(): go.Diagram {
    const dia = new go.Diagram({
      'undoManager.isEnabled': true,
      model: new go.GraphLinksModel({
        nodeKeyProperty: 'id',
        linkKeyProperty: 'key', // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
      }),
    });

    // define the Node template
    dia.nodeTemplate = new go.Node('Auto', {
      mouseHover: (e, obj) => console.log('hovered', obj),
      mouseLeave: (e, obj) => console.log('left', obj),
    }).add(
      new go.Shape('RoundedRectangle', { stroke: null }).bind('fill', 'color'),
      new go.TextBlock({ margin: 8, editable: true }).bindTwoWay('text', 'text')
    );

    return dia;
  }

  /**
   * Handle GoJS model changes, which output an object of data changes via Mode.toIncrementalData.
   * This method should iterate over thoe changes and update state to keep in sync with the FoJS model.
   * This can be done with any preferred state management method, as long as immutability is preserved.
   */
  public diagramModelChange = function (changes: go.IncrementalData) {
    console.log(changes);
    // see gojs-angular-basic for an example model changed handler that preserves immutability
    // when setting state, be sure to set skipsDiagramUpdate: true since GoJS already has this update
  };
}
