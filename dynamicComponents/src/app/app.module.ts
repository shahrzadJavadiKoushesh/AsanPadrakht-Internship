import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameTextInputComponent } from './name-text-input/name-text-input.component';
import { EmailTextInputComponent } from './email-text-input/email-text-input.component';
import { ConfirmCheckboxInputComponent } from './confirm-checkbox-input/confirm-checkbox-input.component';
import { SizeRangeInputComponent } from './size-range-input/size-range-input.component';
import { RadiobuttonInputComponent } from './radiobutton-input/radiobutton-input.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    NameTextInputComponent,
    EmailTextInputComponent,
    ConfirmCheckboxInputComponent,
    SizeRangeInputComponent,
    RadiobuttonInputComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
