import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmptyScreenComponent } from './empty-screen.component';
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [
    EmptyScreenComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule
  ],
  exports: [
    EmptyScreenComponent
  ]
})
export class EmptyModule { }
