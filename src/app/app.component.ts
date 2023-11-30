import { Component, OnInit } from '@angular/core';
import { ITreeOptions, KEYS, TREE_ACTIONS, TreeNode } from "@ali-hm/angular-tree-component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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

  sales: any[] = [];
  currencies = ['USD', 'EUR', 'CZK', 'GBP'];

  points: any[] = [
    {
      name: 'Point 1',
      courses:
        {
          'USD' :
              {
                sellCourse: 37.5,
                buyCourse: 37.5
              },
          'EUR' :
              {
                sellCourse: 39.5,
                buyCourse: 38.5
              },
          'CZK' :
              {
                sellCourse: 39.5,
                buyCourse: 38.5
              },
          'EGP' :
              {
                sellCourse: 39.5,
                buyCourse: 38.5
              },
        }
    },
    {
      name: 'Point 2',
      courses:
          {
            'USD' :
                {
                  sellCourse: 37.5,
                  buyCourse: 37.5
                },
            'EUR' :
                {
                  sellCourse: 39.5,
                  buyCourse: 38.5
                },
            'CZK' :
                {
                  sellCourse: 39.5,
                  buyCourse: 38.5
                },
            'GBP' :
                {
                  sellCourse: 39.5,
                  buyCourse: 38.5
                },
          }
    },
    {
      name: 'Point 3',
      courses:
          {
            'USD' :
                {
                  sellCourse: 37.5,
                  buyCourse: 37.5
                },
            'EUR' :
                {
                  sellCourse: 39.5,
                  buyCourse: 38.5
                },
            'CZK' :
                {
                  sellCourse: 39.5,
                  buyCourse: 38.5
                },
            'EGP' :
                {
                  sellCourse: 39.5,
                  buyCourse: 38.5
                },
          }
    }
  ]

  onNodeActivate($event: any) {
    console.log($event);
  }

  ngOnInit(): void {
    this.sales = [
      { product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, thisYearProfit: 43342 },
      { product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122 },
      { product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321, thisYearProfit: 8500 },
      { product: 'Blue T-Shirt', lastYearSale: 49, thisYearSale: 22, lastYearProfit: 745232, thisYearProfit: 65323 },
      { product: 'Brown Purse', lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643242, thisYearProfit: 500332 },
      { product: 'Chakra Bracelet', lastYearSale: 52, thisYearSale: 65, lastYearProfit: 421132, thisYearProfit: 150005 },
      { product: 'Galaxy Earrings', lastYearSale: 82, thisYearSale: 12, lastYearProfit: 131211, thisYearProfit: 100214 },
      { product: 'Game Controller', lastYearSale: 44, thisYearSale: 45, lastYearProfit: 66442, thisYearProfit: 53322 },
      { product: 'Gaming Set', lastYearSale: 90, thisYearSale: 56, lastYearProfit: 765442, thisYearProfit: 296232 },
      { product: 'Gold Phone Case', lastYearSale: 75, thisYearSale: 54, lastYearProfit: 21212, thisYearProfit: 12533 }
    ];
  }
}
