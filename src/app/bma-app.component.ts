import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bma-app',
  templateUrl: './bma-app.component.html',
  styleUrls: ['./bma-app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BmaAppComponent {
  title = 'bookmyappointment';
}
