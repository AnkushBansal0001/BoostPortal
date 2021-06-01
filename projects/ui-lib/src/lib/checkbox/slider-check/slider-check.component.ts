import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-slider-check',
  templateUrl: './slider-check.component.html',
  styleUrls: ['./slider-check.component.css']
})
export class SliderCheckComponent implements OnInit {
  constructor() { }

  @Input() isActive: boolean = true;
  @Input() widthCheckbox = '44px'
  @Input() heightCheckbox = '19.72px';
  @Input() backgroundColorCheckboxActive = '#6FCF97';
  @Input() backgroundColorCheckboxDeactive = '#C0C0C0';
  @Input() borderRadiusCheckbox = '16.0251px'
  @Input() fontSize = '10px';
  @Input() lineHeight = '14px';
  @Input() color = '#FFFFFF';
  @Input() fontWeight = 'bold';

  @Output() activatedState = new EventEmitter<any>();

  ngOnInit(): void {
  }

  onChangeSlide() {
    this.isActive = !this.isActive;
    this.activatedState.emit(this.isActive);
  }
}
