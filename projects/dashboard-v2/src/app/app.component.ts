import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard-v2';

  mobileNumber !: string;
  onUpdateMobileNumber(event: any){
    this.mobileNumber = event;
    console.log(this.mobileNumber);
  }
}
