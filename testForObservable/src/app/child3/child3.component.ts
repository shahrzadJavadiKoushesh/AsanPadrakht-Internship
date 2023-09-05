import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.scss']
})
export class Child3Component {
  constructor(public dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.data.subscribe(val => {
      console.log(val)
    })
    // this.dataService.data.complete()

  }

}
