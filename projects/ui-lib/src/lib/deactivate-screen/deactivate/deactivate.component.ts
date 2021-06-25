import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-deactivate',
  templateUrl: './deactivate.component.html',
  styleUrls: ['./deactivate.component.css']
})
export class DeactivateComponent implements OnInit {

  title = 'Please renew to start using again.';
  description = 'You’ve exhasted the limit to use this addon.';
  iconUrl = '';
  buttonText = 'Open marketplace';
  constructor() { }

  ngOnInit(): void {
  }

}
