import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bma-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
