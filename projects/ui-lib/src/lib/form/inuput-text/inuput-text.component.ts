import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-inuput-text',
  templateUrl: './inuput-text.component.html',
  styleUrls: ['./inuput-text.component.scss']
})
export class InuputTextComponent implements OnInit {


  @Output() value = new EventEmitter<any>();
  name!: string;
  @Input() errorMsg = 'Please enter correct title';

  @Input() minLength = '';
  @Input() maxLength = '';
  @Input() fontSizeError = '10px';
  @Input() lineHeightError = '14px';
  @Input() colorErrorMsg = '#E39595';

  @Input() placeholder = 'Write the offer title';
  @Input() fontSize = '16px';
  @Input() lineHeight='18px';
  @Input() fontColor = '#2A2A2A';
  @Input() letterSpacing = '0';
  @Input() width = '286px';
  @Input() height="38px";

  @Input() border = '1px solid #DDDDDD';

  @Input() placeholderColor = '#747474';
  @Input() focusedColor = '1px solid #4A4A4A';
  @Input() padding = '0 0 0 10px';
  @Input() iconUrl = '';
  @Input() borderRadius = '4px';
  pattern ='';

  constructor() {
    document.documentElement.style.setProperty(
      '--placeholderColor',
      this.placeholderColor
    );
    document.documentElement.style.setProperty(
      '--focusedColor',
      this.focusedColor
    );



  }

  ngOnInit() {
  }

  onChangeMobileNumber() {
    console.log(this.name);
      this.value.emit(this.name);
  }



}
