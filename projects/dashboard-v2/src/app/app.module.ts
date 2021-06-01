import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule, FormModule, EmptyModule,
   TooltipModule, FileUploaderModule, CheckboxModule,
  CardModule} from '@boost/ui';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FormModule,
    EmptyModule,
    TooltipModule,
    FileUploaderModule,
    CheckboxModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
