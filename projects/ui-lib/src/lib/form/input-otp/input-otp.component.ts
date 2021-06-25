import { Component, OnInit, ViewChild } from '@angular/core';

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

  // @ViewChild('ngOtpInput') ngOtpInputRef:any;//Get reference using ViewChild and the specified hash
  // yourMethod(){
  //   this.ngOtpInputRef.setValue(yourValue);//yourvalue can be any string or number eg. 1234 or '1234'
  // }#4A4A4A
  onOtpChange(data: any){
    console.log(data);
  }
}
