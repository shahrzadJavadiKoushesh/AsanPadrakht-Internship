import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'validation-form';
  onSubmit(form: NgForm) {
  
    if (form.value.password.length < 4) {
      console.log("Password must have 4 or more characters");
      return;
    }
    if (form.value.password !== form.value.confirmPassword) {
      console.log('Passwords do not match.');
      return;
    }

    console.log('Form submitted successfully');
  }
}