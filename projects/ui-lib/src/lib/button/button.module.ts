import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutlineButtonComponent } from './outline-button/outline-button.component';
import { FilledButtonComponent } from './filled-button/filled-button.component';
import { IconButtonComponent } from './icon-button/icon-button.component';



@NgModule({
  declarations: [OutlineButtonComponent, FilledButtonComponent, IconButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FilledButtonComponent,
    IconButtonComponent,
    OutlineButtonComponent
  ]
})
export class ButtonModule { }
