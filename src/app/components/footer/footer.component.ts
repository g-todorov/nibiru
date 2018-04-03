import { Component, OnInit, Input} from '@angular/core';

import { footerState } from '../../animations/footer.state';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.styl'],
  animations: [
    footerState
  ]
})
export class FooterComponent implements OnInit {
  @Input() footerState: string;

  constructor() { }

  ngOnInit() {
  }

}
