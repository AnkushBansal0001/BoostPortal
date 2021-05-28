import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css']
})
export class IconButtonComponent implements OnInit {

  @Input() backgroundColor = '#FFFFFF';
  @Input() color = '#FFB900';
  @Input() fontSize = '13px';
  @Input() lineHeight = '18px';
  @Input() border = '1px solid #FFB900';
  @Input() width = '286px';
  @Input() height = '37px';
  @Input() fontWeight = '600';
  @Input() borderRadius = '4px';
  @Input() label = 'LOGIN USING USERNAME OR EMAIL ';

  @Input() iconUrl1 = '';
  @Input() imageUrl1Width = '';
  @Input() imageUrl1Height = '';

  @Input() iconUrl2 = '';
  @Input() imageUrl2Width = '';
  @Input() imageUrl2Height = '';


  constructor() { }

  ngOnInit(): void {
  }

}
