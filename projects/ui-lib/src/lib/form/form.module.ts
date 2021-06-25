import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputNumberComponent } from './input-number/input-number.component';
import { FormsModule } from '@angular/forms';
import { InputOtpComponent } from './input-otp/input-otp.component';
import { InuputTextComponent } from './inuput-text/inuput-text.component';
import { NgOtpInputModule } from  'ng-otp-input';


@NgModule({
  declarations: [
    InputNumberComponent,
    InputOtpComponent,
    InuputTextComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgOtpInputModule
  ],
  exports: [
    InputNumberComponent,
    InputOtpComponent,
    InuputTextComponent
  ]
})
export class FormModule { }
