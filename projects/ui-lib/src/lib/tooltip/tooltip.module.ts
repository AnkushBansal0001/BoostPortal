import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionMarkComponent } from './question-mark/question-mark.component';



@NgModule({
  declarations: [
    QuestionMarkComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    QuestionMarkComponent
  ]
})
export class TooltipModule { }
