import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-offers-card',
  templateUrl: './offers-card.component.html',
  styleUrls: ['./offers-card.component.css']
})
export class OffersCardComponent implements OnInit {

  constructor() { }

  //card css
  widthCard = '324px';
  heightCard = '290px';
  minHeightCard = '290px';
  borderRadiusCard = '10px';
  backgroundColorCard = '#FFFFFF';
  borderCard = '1px solid #E2E2E2';
  paddingCard = '19px 22px';

  // image css
  borderImage = '1px solid #E2E2E2';
  borderRadiusImage = '4px';
  widthImage= '100%';
  heightImage= '134px';

  // title css
  colorTitle = '#FFB900';
  fontSizeTitle = '18px';
  lineHeightTitle = '25px';

  //price and category
  fontSizePriceCategory = '14px';
  lineHeightPriceCategory = '19px';
  colorPriceCategory = '#747474';
  fontWeightPrice = '500';
  fontWeightCategory = '400';

  colorPrice = '#4A4A4A';

  // description css
  descriptionColor = '#747474';
  fontSizeDescription = '12px';
  lineHeightDescription = '16px';

  ngOnInit(): void {
  }

}
