import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-heading-button',
  templateUrl: './heading-button.component.html',
  styleUrls: ['./heading-button.component.scss']
})
export class HeadingButtonComponent implements OnInit {

  @Input() title = 'heading';
  @Input() color = '#747474';
  @Input() bgColor= '#EFEFEF';
  @Input() fontSize= '24px';
  @Input() lineHeight= '27px';
  @Input() borderRadius= '7.41176px';
  @Input() border= 'none';
  @Input() width = '168px';
  @Input() height = '44px';
  constructor() { }

  ngOnInit() {
  }

}
