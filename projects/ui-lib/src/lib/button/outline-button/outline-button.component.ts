import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-outline-button',
  templateUrl: './outline-button.component.html',
  styleUrls: ['./outline-button.component.css']
})
export class OutlineButtonComponent implements OnInit {


  backgroundColor = '#FFFFFF';
  color = '#FFB900';
  fontSize = '13px';
  lineHeight = '18px';
  border = '1px solid #FFB900';
  width = '286px';
  height = '37px';
  fontWeight = '600';
  borderRadius = '4px';
  label = 'LOGIN USING USERNAME OR EMAIL '

  constructor() { }

  ngOnInit(): void {
  }

}
