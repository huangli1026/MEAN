import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ItunesService } from '../itunes.service';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() searchArtist = new EventEmitter<string>();
  // private searchSubject = new Subject<string>();

  onSearch(value: string) {
    this.searchArtist.emit(value);
  }
  constructor(private itunesService: ItunesService) { 
    // this.searchSubject.pipe(debounceTime(300)).subscribe(value => {
      // this.searchArtist.emit(value);
    // });
  }
  
  ngOnInit(): void {
  }

}
