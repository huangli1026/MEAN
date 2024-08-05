import { Injectable } from '@angular/core';
import { PokemonResponse } from './pokemon/pokemon.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  getPokemon(name: string): Observable<PokemonResponse> {
    return this.http.get<PokemonResponse>(`${this.apiUrl}/${name}`);
  }
  
}
