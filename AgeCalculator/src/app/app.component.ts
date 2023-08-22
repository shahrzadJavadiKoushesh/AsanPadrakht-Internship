import { Component, OnInit } from '@angular/core';
import { ValidatorFn } from '@angular/forms';
import { FormBuilder, FormGroup, AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import * as moment from 'jalali-moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AgeCalculator';

  ageMessage: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.detectChanges();
  }
  jalaliDate = moment().locale('fa').format('YYYY/M/D');

  inputForm = this.fb.group({
    date: [null, [Validators.required, Validators.min(1), Validators.max(31)]],
    month: [null, [Validators.required, Validators.min(1), Validators.max(12)]],
    year: [null, [Validators.required, Validators.max(+this.jalaliDate.substring(0,4))]],
  });

  validateNumberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  detectChanges() {

    this.inputForm.valueChanges.subscribe(res => {
      // Variable res holds the current value of the form
    let jalaliDate = moment().locale('fa').format('YYYY/M/D');
    const d = new Date()

    console.log("jalali date:", jalaliDate);

    let year = this.inputForm.value.year;
    let month = this.inputForm.value.month;
    let date = this.inputForm.value.date;

    if (!res.year || !res.month || !res.date){
      return
    }
    // current value of the form
    let resYear: number = res.year;
    let resMonth: number = res.month;
    let resDate: number = res.date;

    if (!year || !month || !date) {
      return;
    }

    console.log(resYear)
    console.log(resMonth)
    console.log(resDate)

    if (year && +year > +jalaliDate.substring(0, 4)) {
      this.ageMessage = `Year can't be more than ${jalaliDate.substring(0, 4)}`;
      return;
    }
    if (month && (+month < 1 || +month > 12)) {
      this.ageMessage = 'Month should be between 1 and 12';
      return;
    }
    if (date && month && (+date < 1 ||(+month <= 6 && date > 31) || (+date > 30 && +month > 6 && +month < 12) || (+month == 12 && +date > 29))) {
      this.ageMessage = 'Invalid date for this month';
      return;
    }


    if (!resYear || !resMonth || !resDate){
      return
    }

    // if (resMonth < 0 || (resMonth == 0 && resDate < 0)) {
    //   resYear--;
    //   resMonth += 12;
    // }
    // if (resDate < 0) {
    //   resMonth--;
    //   let daysInMonth = new Intl.DateTimeFormat('en-US-u-ca-persian', {day: 'numeric'}).format(d);
    //   resDate += +daysInMonth;
    // }
    if (+new Intl.DateTimeFormat('en-US-u-ca-persian', {month: 'numeric'}).format(d) - resMonth > 0){
      console.log("HJK")
      console.log("RES:", resMonth)
      resYear--;
      resMonth = 12;
    }
    console.log("RES afer if: ", resMonth)

    this.ageMessage = `You are ${+jalaliDate.substring(0, 4) - resYear -1 } years, ${+new Intl.DateTimeFormat('en-US-u-ca-persian', {month: 'numeric'}).format(d) - resMonth} months, and ${+jalaliDate.substring(7) - resDate} days old`;
    });
    

  }

}




