import { Component } from '@angular/core';
import { ITreeOptions, KEYS, TREE_ACTIONS, TreeNode } from "@ali-hm/angular-tree-component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'whetof';

  nodes = [
    {
      name: 'Point Group 1',
      children: [
        { name: 'Exchange Point 1' },
        { name: 'Exchange Point 2' }
      ]
    },
    {
      name: 'Point Group 2',
      children: [
        { name: 'Exchange Point 3' },
        { name: 'Exchange Point 4' }
      ]
    }
  ];
  options: ITreeOptions = {
    nodeHeight: 23,
    allowDrag: (node) => {
      return true;
    },
    allowDrop: (node) => {
      return true;
    },
    allowDragoverStyling: true,
    levelPadding: 10,
    useVirtualScroll: true,
    animateExpand: true,
    scrollOnActivate: true,
    animateSpeed: 30,
    animateAcceleration: 1.2,
  }

  onNodeActivate($event: any) {
    console.log($event);
  }
}
