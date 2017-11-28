import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.styl']
})
export class SectionComponent implements OnInit {
  items: [any];

  constructor(private itemsService: ItemsService, private route: ActivatedRoute) { }

  ngOnInit() {
    const routerSubscription = this.route.params.subscribe(params => {
      this.items = this.itemsService.getItems(params.section);
    });
  }

}
