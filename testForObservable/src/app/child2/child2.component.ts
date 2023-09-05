import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit{
  constructor(public dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.data.subscribe(val => {
      console.log(val)
    })
    // this.dataService.data.complete()

  }

  nextData():void{
    this.dataService.data.next({
      "id": 1,
      "first_name": "Test1 ch2",
      "last_name": "Satheesh 1"
    })

  }
}