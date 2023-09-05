import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {

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
      "first_name": "Test1 ch1",
      "last_name": "Satheesh 1"
    })

  }

}