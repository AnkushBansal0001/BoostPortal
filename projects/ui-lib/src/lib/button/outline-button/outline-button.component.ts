import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-outline-button',
  templateUrl: './outline-button.component.html',
  styleUrls: ['./outline-button.component.css']
})
export class OutlineButtonComponent implements OnInit {


  @Input() backgroundColor = '#FFFFFF';
  @Input() color = '#FFB900';
  @Input() fontSize = '13px';
  @Input() lineHeight = '18px';
  @Input() border = '1px solid #FFB900';
  @Input() width = '286px';
  @Input() height = '37px';
  @Input() fontWeight = '600';
  @Input() borderRadius = '4px';
  @Input() label = 'LOGIN USING USERNAME OR EMAIL '

  constructor() { }

  ngOnInit(): void {
  }

}
