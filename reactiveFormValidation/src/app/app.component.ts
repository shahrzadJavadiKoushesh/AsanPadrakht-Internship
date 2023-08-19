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
  constructor(private fb: FormBuilder) { }

  contactForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: [''],
    email: ['', [Validators.email, Validators.required, Validators.pattern(/.[@](asanpardakht.com|asanpardakht.net|asanpardakht.ir)/gm)]],
    password: ['', [Validators.minLength(4), Validators.required, this.validateStrongPassword]],
    confirmPassword: ['', [Validators.minLength(4), this.validateStrongPassword]],
    mobiles: this.fb.array([
      this.fb.control('')
    ])
  }, { validators: this.validateMobilesNotEmpty })

  get mobiles() {
    return this.contactForm.get('mobiles') as FormArray;
  }

  onSubmit() {
    console.log(this.contactForm)
  }

  addPhone() {
    this.mobiles.push(this.fb.control(''))
  }

  validateMobilesNotEmpty(control: AbstractControl): ValidationErrors | null {
    const mobilesArray = control.get('mobiles') as FormArray;
    const emptyMobile = mobilesArray.controls.some(phoneControl => !phoneControl.value);
    return emptyMobile ? { mobilesNotEmpty: true } : null;
  }

  validateStrongPassword(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value;

    if (!value) { return null }

    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    const digitRegex = /\d/;

    const hasUppercase = uppercaseRegex.test(value);
    const hasLowercase = lowercaseRegex.test(value);
    const hasSpecialChar = specialCharRegex.test(value);
    const hasDigit = digitRegex.test(value);

    const isStrong = hasUppercase && hasLowercase && hasSpecialChar && hasDigit;

    return isStrong ? null : { strongPassword: true };

  }
}