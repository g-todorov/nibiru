import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../items.service';

import {itemState} from '../animations/item.state'

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.styl'],
  animations: [itemState]
})
export class ItemDetailsComponent implements OnInit {
  @Input() hero: any;
  item: {};
  itemState: string = 'opened'

  constructor(private route: ActivatedRoute, private itemsService: ItemsService) { }

  ngOnInit() {
    // const routerSubscription = this.route.params.subscribe(params => {
    //   this.item = this.itemsService.getItem(params.name)
    // });
  }

}