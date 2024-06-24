import { Component } from '@angular/core';
import { ItunesService } from './itunes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ItunesMusic';
  albums: any[]=[];

  constructor(private itunesService: ItunesService) {}

  searchArtist(term: string) {
    this.itunesService.searchArtist(term)
      .subscribe((data: any) => {
        this.albums = data.results;
      });
  }
}
