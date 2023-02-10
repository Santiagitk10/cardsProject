import { Component, Input } from '@angular/core';
import { PokemonDetail } from 'src/app/models/pokemonDetail';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {
  @Input() imageClass: string = "";
  @Input() imageSource: string = "";
  @Input() name: string = "";
  @Input() price: string = "";
  @Input() stock: string = "";
}
