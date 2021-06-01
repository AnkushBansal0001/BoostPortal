import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersCardComponent } from './offers-card/offers-card.component';



@NgModule({
  declarations: [
    OffersCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OffersCardComponent
  ]
})
export class CardModule { }
