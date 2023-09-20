// search.component.ts
import { Component } from '@angular/core';
import { SearchFilters } from './search.model';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  filters: SearchFilters = new SearchFilters();
  searchResults: any[];

  constructor(private searchService: SearchService) {}

  search(): void {
    this.searchService.search(this.filters)
      .subscribe((results) => {
        this.searchResults = results;
      });
  }
}
