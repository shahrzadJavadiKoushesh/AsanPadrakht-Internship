import { Component } from '@angular/core';
import { ValidatorFn } from '@angular/forms';
import { FormBuilder, FormGroup, AbstractControl, ValidationErrors, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveFormValidation';

  constructor(private fb: FormBuilder) {}

  contactForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: [''],
    email: ['', [Validators.email, Validators.required, Validators.pattern(/.[@](asanpardakht.com|asanpardakht.net|asanpardakht.ir)/gm)]],
    password: ['', [Validators.minLength(4), Validators.required, Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d).*$/gm)]],
    confirmPassword: ['', [Validators.minLength(4), Validators.required, Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d).*$/gm)]],
    mobiles: this.fb.array([
      this.fb.control('')
    ])
  })

  get mobiles(){
    return this.contactForm.get('mobiles') as FormArray;
  }

  onSubmit(){
    console.log(this.contactForm)
  }

  addPhone(){
    this.mobiles.push(this.fb.control(''))
  }

}