import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-filled-button',
  templateUrl: './filled-button.component.html',
  styleUrls: ['./filled-button.component.css']
})
export class FilledButtonComponent implements OnInit {

  backgroundColor = '#FFB900';
  color = '#FFFFFF';
  fontSize = '13px';
  lineHeight = '18px';
  border = 'none';
  width = '286px';
  height = '37px';
  fontWeight = '600';
  borderRadius = '4px';
  label = 'CONTINUE'

  constructor() { }

  ngOnInit(): void {
  }

}
