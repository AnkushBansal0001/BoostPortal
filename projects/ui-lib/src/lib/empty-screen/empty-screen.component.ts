import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-screen',
  templateUrl: './empty-screen.component.html',
  styleUrls: ['./empty-screen.component.scss']
})
export class EmptyScreenComponent implements OnInit {

  @Input() iconUrl = '';
  @Input() widthIcon = '';
  @Input() title = 'No offers created so far!';
  @Input() descriptionLine = 'You don’t have any offers added for your customers.';
  @Input() buttontext = 'CREATE A NEW OFFER';
  @Input() buttonLink = 'link';
  @Input() bottomDescLine = 'To learn more about how to add a new offer, click on the ‘     ’ icon on top.';


  @Input() titleColor= '#4A4A4A';
  @Input() fontSizeTitle= '20px';
  @Input() lineHeightTitle= '27px';
  @Input() fontWeightTitle= '400';
  @Input() marginTitle = '18px 0 0 0';

  @Input() descriptionColor= '#747474';
  @Input() fontSizeDescription= '12px';
  @Input() lineHeightDescription= '16px';
  @Input() fontWeightDescription= '400';
  @Input() marginDescription = '9px 0 0 0';


  @Input() buttonColor= '#FFB900';
  @Input() buttonBgColor = 'rgba(255, 185, 0, 0.1)';
  @Input() borderButton = '2px solid #FFB900';
  @Input() borderRadiusButton = '4px';
  @Input() fontSizeButton= '12px';
  @Input() lineHeightButton= '16px';
  @Input() fontWeightButton= 'bold';
  @Input() widthButton = '192px';
  @Input() heightButton = '35px';
  @Input() marginButton = '21px 0 0 0';


  @Input() bottomDescLineSpace = '50px';
  @Input() colorBottomDesc = '#747474';
  @Input() fontSizeBottomDesc='12px';
  @Input() lineHeightBottomDesc='16px';

  constructor() { }

  ngOnInit() {
  }

}
