import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit {

  @Output() mobileNumber = new EventEmitter<any>();
  mobile!: string;
  @Input() errorMsg = 'Please enter correct number';

  @Input() minLength = 10;
  @Input() maxLength = 10;
  @Input() fontSizeError = '10px';
  @Input() lineHeightError = '14px';
  @Input() colorErrorMsg = '#E39595';

  @Input() placeholder = '10 digit mobile number';
  @Input() fontSize = '16px';
  @Input() lineHeight='22px';
  @Input() fontColor = '#4A4A4A';
  @Input() letterSpacing = '1.5px';
  @Input() width = '286px';
  @Input() height="40px";

  @Input() border = 'none';
  @Input() borderBottom = '1px solid #FFB900';

  @Input() placeholderColor = '#747474';
  @Input() padding = '0 0 0 30px';
  @Input() iconUrl = '';

  constructor() {
    document.documentElement.style.setProperty(
      '--placeholderColor',
      this.placeholderColor
    );
  }

  ngOnInit() {
  }

  onChangeMobileNumber() {
    console.log(this.mobile);
    if(this.mobile.length == 10) {
      this.mobileNumber.emit(this.mobile);
    }
  }

}
