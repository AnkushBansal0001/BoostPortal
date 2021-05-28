import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-filled-button',
  templateUrl: './filled-button.component.html',
  styleUrls: ['./filled-button.component.css']
})
export class FilledButtonComponent implements OnInit {


  @Input() backgroundColor = '#FFB900';
  @Input() color = '#FFFFFF';
  @Input() fontSize = '13px';
  @Input() lineHeight = '18px';
  @Input() border = 'none';
  @Input() width = '286px';
  @Input() height = '37px';
  @Input() fontWeight = '600';
  @Input() borderRadius = '4px';
  @Input() label = 'CONTINUE'

  constructor() { }

  ngOnInit(): void {
  }

}
