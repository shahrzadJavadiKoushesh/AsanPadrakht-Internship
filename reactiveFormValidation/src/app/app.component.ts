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
    password: ['', [Validators.minLength(8), Validators.required, this.validateStrongPassword, this.patternValidator(/\d/, {hasNumber: true}), this.patternValidator(/[A-Z]/, {hasCapitalCase: true}), this.patternValidator(/[a-z]/, {hasSmallCase: true}), this.patternValidator(/[#@%&!]+/, { hasSpecialCharacters: true }),]],
    confirmPassword: ['', [Validators.minLength(8), this.validateStrongPassword]],
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
    const specialCharRegex = /[#@%&!]+/;
    const digitRegex = /\d/;

    const hasUppercase = uppercaseRegex.test(value);
    const hasLowercase = lowercaseRegex.test(value);
    const hasSpecialChar = specialCharRegex.test(value);
    const hasDigit = digitRegex.test(value);

    const isStrong = hasUppercase && hasLowercase && hasSpecialChar && hasDigit;

    return isStrong ? null : { strongPassword: true };
  }

  patternValidator(regex: RegExp, error: ValidationErrors | null): ValidatorFn {
    return (control: AbstractControl) => {
      if (!control.value) {
        // if control is empty return no error
        return null;
      }
  
      // test the value of the control against the regexp supplied
      const valid = regex.test(control.value);
  
      // if true, return no error (no error), else return error passed in the second parameter
      if (valid){
        return null;
      }
      else{
        return error;
      }
    };
  }
}