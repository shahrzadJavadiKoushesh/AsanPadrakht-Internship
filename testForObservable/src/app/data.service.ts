import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data = new ReplaySubject(5);

  // data = new BehaviorSubject({});
  // data = new Subject();

  


  // getData(): Observable<any[]> {
  //   return of ([{
  //     "id": 1,
  //     "first_name": "Test",
  //     "last_name": "Satheesh 1"
  //   }, {
  //     "id": 2,
  //     "first_name": "Test",
  //     "last_name": "Satheesh 2"
  //   }, {
  //     "id": 3,
  //     "first_name": "Test",
  //     "last_name": "Satheesh 3"
  //   }]);
  // }
}