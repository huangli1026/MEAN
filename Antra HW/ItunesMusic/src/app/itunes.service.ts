import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItunesService {
  private baseUrl = 'https://itunes.apple.com/search';

  constructor(private http: HttpClient) { }

  searchArtist(term: string): Observable<any> {
    const url = `${this.baseUrl}?term=${term}&media=music&entity=album&attribute=artistTerm&limit=50`;
    return this.http.get(url);
  }
}
