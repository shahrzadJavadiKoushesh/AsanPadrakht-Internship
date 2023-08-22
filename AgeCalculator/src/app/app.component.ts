import { Component } from '@angular/core';
import { ValidatorFn } from '@angular/forms';
import { FormBuilder, FormGroup, AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import * as moment from 'jalali-moment';

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

  validateNumberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  calculateAge() {
    let jalaliDate = moment().locale('fa').format('YYYY/M/D');

    console.log("jalali date:", jalaliDate);

    let year = this.inputForm.value.year;
    let month = this.inputForm.value.month;
    let date = this.inputForm.value.date;

    if (year === null || year === undefined || month === null || month === undefined || date === null || date === undefined) {
      return;
    }

    console.log(year)
    console.log(month)
    console.log(date)

    if (year && +year > +jalaliDate.substring(0,4)) {
      this.ageMessage = `Year can't be more than ${jalaliDate.substring(0,4)}`;
      return;
    }
    if (month && (+month < 1 || +month > 12)) {
      this.ageMessage = 'Invalid month';
      return;
    }
    if (date && month && (+date < 1 || (+date > 30 && +month > 6 && +month < 12) || (+month == 12 && +date > 29))) {
      this.ageMessage = 'Invalid date';
      return;
    }

    // Calculate the age in years, months, and days
    let ageYears = +jalaliDate.substring(0, 4) - +year;
    let ageMonths = +jalaliDate.substring(5,6) - +month + 1;
    let ageDays = +jalaliDate.substring(7) - +date;
    console.log("years: ", ageYears)
    console.log("months: ", ageMonths)
    console.log("days: ", ageDays)

    if (ageMonths < 0 || (ageMonths == 0 && ageDays < 0)) {
      ageYears--;
      ageMonths += 12;
    }
    if (ageDays < 0) {
      ageMonths--;
      let daysInMonth = new Date(+year, +month, 0).getDate();
      ageDays += daysInMonth;
    }

    this.ageMessage = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old`;

  }

}




