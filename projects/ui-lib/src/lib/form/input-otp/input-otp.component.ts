import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-otp',
  templateUrl: './input-otp.component.html',
  styleUrls: ['./input-otp.component.scss']
})
export class InputOtpComponent implements OnInit {

  constructor() { }

  maxLength = '4';
  minLength = '4';
  otpNumber = '';
  placeholder= '';
  border= 'none';
  color = '#4A4A4A';

  ngOnInit() {
  }

}
