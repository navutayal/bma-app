import { Component } from '@angular/core';
import { PageTitleService } from '../page-title.service';

@Component({
  selector: 'bma-page-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private pageTitle: PageTitleService) { }

  getTitle() {
    return this.pageTitle.title || 'Maintain';
  }

}
