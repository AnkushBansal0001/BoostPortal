import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-offers-card',
  templateUrl: './offers-card.component.html',
  styleUrls: ['./offers-card.component.css']
})
export class OffersCardComponent implements OnInit {
  hovered: any = false;

  constructor() { }

  //card css
  widthCard = '324px';
  heightCard = '290px';
  minHeightCard = '290px';
  borderRadiusCard = '10px';
  backgroundColorCard = '#FFFFFF';
  borderCard = '1px solid #E2E2E2';
  hoverBorderCard = '1px solid #27AE60';
  paddingCard = '19px 22px';
  boxShadowCard = '0px 0px 7.26259px #D8D8D8';
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

  // image path
  @Input() imageUrl ='';

  // activated state
  backgroundColorActivatedState = '#FFFFFF';
  activeBackgroundColorActivatedState = '#FFFFFF';
  borderActivatedState= '1px solid #E2E2E2';
  widthActivatedState= '107px';
  heightActivatedState= '22px';
  borderRadiusActivatedState= '4px';

  @Input() blinkingDotUrl = '';

  colorState= '#27AE60';
  activeColorState = '#FFFFFF';
  fontSizeState= '10px';
  lineHeightState= '14px';

  backgroundColorState = '#FFFFFF';
  activeBackgroundColorState = '#27AE60';

  widthArrowIcon = '14px';
  heightArrowIcon = '14px';

  @Input() arrowImageUrl = 'assets/images/boostLink.svg';
  ngOnInit(): void {
  }

}
