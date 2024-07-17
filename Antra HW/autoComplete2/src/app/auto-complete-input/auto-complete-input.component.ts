import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-auto-complete-input',
  templateUrl: './auto-complete-input.component.html',
  styleUrls: ['./auto-complete-input.component.css']
})
export class AutoCompleteInputComponent implements OnInit {
  @Output() public onSelect = new EventEmitter<string>();
  results: string[] = [];
  searchTerm = new Subject<string>();
  isLoading = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.searchTerm.pipe(
      debounceTime(300)
    ).subscribe(term => {
      this.isLoading = true;
      this.fetchData(term).then(data => {
        this.results = data;
        this.isLoading = false;
      });
    });
  }
  fetchData(term: string): Promise<string[]> {
    return this.http.get<string[]>(`https://example.com/api/items?q=${term}`)
      .toPromise()
      .then(data => data || []);  // Return an empty array if data is undefined
  }

  onType(event: Event) {
    this.searchTerm.next((<HTMLInputElement>event.target).value);
  }

  onSelection(item: string) {
    this.onSelect.emit(item);
  }

}
