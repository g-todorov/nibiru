import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { ActivatedRoute } from '@angular/router';

import { FurnitureService } from '../services/furniture.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.styl']
})
export class SectionComponent implements OnInit {
  items: [any];
  furnitureItems;
  sectionName: string;

  constructor(private itemsService: ItemsService, private route: ActivatedRoute, private furnitureService: FurnitureService) { }

  ngOnInit() {
    const routerSubscription = this.route.data.subscribe(data => {
      this.items = this.itemsService.getItems(data.section);
    });

    // TODO Implement Services
    // this.furnitureService.requestFurnitureItems();

    // this.furnitureService.shoppingItems.subscribe(furnitureItems => {
    //   this.furnitureItems = furnitureItems;
    // });
  }

}
