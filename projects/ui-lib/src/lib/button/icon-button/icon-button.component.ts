import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css']
})
export class IconButtonComponent implements OnInit {

  backgroundColor = '#FFFFFF';
  color = '#FFB900';
  fontSize = '13px';
  lineHeight = '18px';
  border = '1px solid #FFB900';
  width = '286px';
  height = '37px';
  fontWeight = '600';
  borderRadius = '4px';
  label = 'LOGIN USING USERNAME OR EMAIL ';

  iconUrl1 = 'hash';
  imageUrl1Width = '';
  imageUrl1Height = '';

  iconUrl2 = '';
  imageUrl2Width = '';
  imageUrl2Height = '';


  constructor() { }

  ngOnInit(): void {
  }

}
