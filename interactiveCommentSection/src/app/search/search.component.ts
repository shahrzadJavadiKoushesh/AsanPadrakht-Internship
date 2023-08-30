import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Input() placeholder!: string;
  @Output() searchQuery = new EventEmitter<string>();
  query: string = '';
  
  onQueryChange() {
    this.searchQuery.emit(this.query);
  }


}
