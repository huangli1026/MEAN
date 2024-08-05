import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { PokemonResponse } from './pokemon.interface';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  starterPokemon = ['Bulbasaur', 'Squirtle', 'Charmander'];
  pokemonDetails: { [key: string]: PokemonResponse } = {};
  selectedPokemon: PokemonResponse | null = null;
  isConfirmed: boolean = false;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.loadPokemonDetails();
  }

  loadPokemonDetails(): void {
    this.starterPokemon.forEach(pokemon => {
      this.pokemonService.getPokemon(pokemon.toLowerCase()).subscribe(data => {
        this.pokemonDetails[pokemon] = data;
      });
    });
  }

  getPokemonDetails(name: string): PokemonResponse | null {
    return this.pokemonDetails[name] || null;
  }

  getPokemonImage(name: string): string {
    const details = this.getPokemonDetails(name);
    return details ? details.sprites.front_default : '';
  }

  confirmSelection(name: string): void {
    if (this.isConfirmed && this.selectedPokemon?.name.toLowerCase() === name.toLowerCase()) {
      return; // Prevent re-selection of the same Pokemon
    }
    if (window.confirm(`Are you sure you want to select ${name} as your Pokémon?`)) {
      this.selectedPokemon = this.pokemonDetails[name];
      this.isConfirmed = true;
    }
  }
}
