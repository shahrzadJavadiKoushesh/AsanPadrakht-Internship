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
    password: ['', [Validators.minLength(8), Validators.required, this.validateStrongPassword, this.patternValidator(/\d/, { hasNumber: true }), this.patternValidator(/[A-Z]/, { hasCapitalCase: true }), this.patternValidator(/[a-z]/, { hasSmallCase: true }), this.patternValidator(/[#@%&!]+/, { hasSpecialCharacters: true })]],
    confirmPassword: ['', [Validators.minLength(8), this.validateStrongPassword]],
    mobiles: this.fb.array([
      this.fb.control('')
    ])
  }, { validators: [this.validateMobilesNotEmpty, this.validateMobilesOnlyNumber, this.validatePasswordMatch]})


  get mobiles() {
    return this.contactForm.get('mobiles') as FormArray;
  }

  onSubmit() {
    console.log(this.contactForm)
  }

  addPhone() {
    this.mobiles.push(this.fb.control(''))
  }

  validatePasswordMatch(control: AbstractControl) {debugger
    const password: string = control.get('password')!.value; // get password from our password form control
    const confirmPassword: string = control.get('confirmPassword')!.value; // get password from our confirmPassword form control
    // compare is the password math
    if (password !== confirmPassword) {
      // if they don't match, set an error in our confirmPassword form control
      control.get('confirmPassword')!.setErrors({ NoPassswordMatch: true });
    } else {
      control.get('confirmPassword')!.setErrors(null);
    }
  }
  
  validateMobilesNotEmpty(control: AbstractControl): ValidationErrors | null {
    const mobilesArray = control.get('mobiles') as FormArray;
    const emptyMobile = mobilesArray.controls.some(phoneControl => !phoneControl.value);
    return emptyMobile ? { mobilesNotEmpty: true } : null;
  }

  validateMobilesOnlyNumber(control: AbstractControl): ValidationErrors | null {
    const mobilesArray = control.get('mobiles') as FormArray;
    
    for (let i = 0; i < mobilesArray.length; i++) {
        const mobileControl = mobilesArray.at(i);
        const mobileValue = mobileControl.value;
        
        if (isNaN(mobileValue)) {
            return { onlyNumber: true };
        }
    }
    return null;
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
        return null;
      }

      // test the value of the control against the regexp supplied
      const valid = regex.test(control.value);

      if (valid) {
        return null;
      }
      else {
        return error;
      }
    };
  }
}