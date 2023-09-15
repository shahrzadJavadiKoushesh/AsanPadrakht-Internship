import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'newMat';

  isLinear = true;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;

  finalFormGroup!: FormGroup;

  Soptions: Option[] = [
    { value: 'arcade-0', viewValue: 'Arcade' },
    { value: 'advanced-1', viewValue: 'Advanced' },
    { value: 'pro-2', viewValue: 'Pro' },
  ];

  Toptions: Option[] = [
    { value: 'onlineservice-0', viewValue: 'Online Service' },
    { value: 'largerstorage-1', viewValue: 'Larger Storage' },
    { value: 'customizableprofile', viewValue: 'Customizable Profile' },
  ]

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required]
    });

    this.secondFormGroup = this.fb.group({
        plan: ['', Validators.required],
    });

    this.thirdFormGroup = this.fb.group({
        addons: ['', Validators.required]
    });

    this.finalFormGroup = this.fb.group({
        name: [''],
        email: [''],
        phone: [''],
        plan: [''],
        addons: ['']
    });
}


  mergeData(): void {
    this.finalFormGroup.patchValue({
      name: this.firstFormGroup.value.name,
      email: this.firstFormGroup.value.email,
      phone: this.firstFormGroup.value.phone
    });

    this.finalFormGroup.patchValue({
      plan: this.secondFormGroup.value.plan,
      addons: this.thirdFormGroup.value.addons
    });

  }

  submit() {
    this.mergeData();
    console.log(this.finalFormGroup.value);
  }
}