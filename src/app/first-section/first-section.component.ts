import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.styl']
})
export class FirstSectionComponent implements OnInit {
  firstSectionItems: [any];

  constructor(private itemsService: ItemsService, private route: ActivatedRoute) { }

  ngOnInit() {
    const routerSubscription = this.route.params.subscribe(params => {
      debugger
      this.firstSectionItems = this.itemsService.getItems(params.path);
    });
    
  }

}
