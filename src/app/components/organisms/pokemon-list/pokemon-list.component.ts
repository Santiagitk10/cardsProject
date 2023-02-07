import { Component, Input } from '@angular/core';
import { PokemonDetail } from 'src/app/models/pokemonDetail';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  @Input() pokemonsInDatabase?: PokemonDetail[] = [];
}
