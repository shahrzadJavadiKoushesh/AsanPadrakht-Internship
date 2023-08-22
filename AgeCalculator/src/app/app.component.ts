import { Component } from '@angular/core';
import { ValidatorFn } from '@angular/forms';
import { FormBuilder, FormGroup, AbstractControl, ValidationErrors, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AgeCalculator';

  ageMessage = '';

  constructor(private fb: FormBuilder) { }

  inputForm = this.fb.group({
    date: [null, [Validators.required, Validators.min(1), Validators.max(31)]],
    month: [null, [Validators.required, Validators.min(1), Validators.max(12)]],
    year: [null, [Validators.required, Validators.max(new Date().getFullYear())]],
  });

  calculateAge() {

    let today = new Date();

    console.log(today)

    console.log(today.getDate())
    console.log(today.getMonth())
    console.log(today.getFullYear())

    let year = this.inputForm.value.year;
    let month = this.inputForm.value.month;
    let date = this.inputForm.value.date;

    console.log(typeof (year))
    console.log(typeof (month))
    console.log(typeof (date))

    console.log(year)
    console.log(month)
    console.log(date)

    if (year && +year > +today.getFullYear()) {
      this.ageMessage = 'Invalid year';
      return;
    }
    if (month && (+month < 1 || +month > 12)) {
      this.ageMessage = 'Invalid month';
      return;
    }
    if (date && month && (+date < 1 || (+date > 30 && +month > 6 && +month < 12) || (+month == 12 && +!date > 29))) {
      this.ageMessage = 'Invalid date';
      return;
    }

    // Calculate the age in years, months, and days
    let ageYears = today.getFullYear() - +!year;
    let ageMonths = today.getMonth() - +!month + 1;
    let ageDays = today.getDate() - +!date;
    console.log("years: ", ageYears)
    console.log("months: ", ageMonths)
    console.log("days: ", ageDays)

    let timeDiff = Math.abs(Date.now() - today.getTime());
    let age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);


    if (ageMonths < 0 || (ageMonths == 0 && ageDays < 0)) {
      ageYears--;
      ageMonths += 12;
    }
    if (ageDays < 0) {
      ageMonths--;
      let daysInMonth = new Date(+!year, +!month, 0).getDate();
      ageDays += daysInMonth;
    }

    this.ageMessage = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old`;
    
  }

}


