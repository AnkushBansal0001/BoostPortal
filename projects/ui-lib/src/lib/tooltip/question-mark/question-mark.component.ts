import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-question-mark',
  templateUrl: './question-mark.component.html',
  styleUrls: ['./question-mark.component.css']
})
export class QuestionMarkComponent implements OnInit {
  @Input() width  = '12px';
  @Input() iconUrl  = '';

  @Input() toolTipText = ' Get a quick overview of all analytics from your synced social channels right on your business dashboard.';
  @Input() bgColorTooltipText = '';

   @Input() bgColorTooltip = '#FFFFFF';
   @Input() borderTooltip = '1px solid #F9F9F9';
   @Input() boxShadowTooltip = '0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)';
   @Input() borderRadiusTooltip = '4px';
   @Input() colorTooltip = '#000000';
   @Input() fontSizeTooltip = '12px';
   @Input() lineHeightTooltip = '14px';

  constructor() { }

  ngOnInit(): void {
  }

}
