import { Component, OnInit } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { PokemonDetail } from 'src/app/models/pokemonDetail';
import { PokemonList } from 'src/app/models/pokemonList';
import { CardStoreService } from '../card-store.service';
import { PokemonDataService } from '../pokemon-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  pokemonsInDatabase: PokemonDetail[] = [];
  pokemons: PokemonDetail[] = [];
  

  constructor(private pokemonDataService: PokemonDataService, 
    private cardStoreService: CardStoreService ){

  }

  ngOnInit(): void {
    this.cardStoreService.getCards().subscribe(pokemonsDetail => {
      if(pokemonsDetail.length === 0){
        this.toRunOnceToPopulateFirebaseCards();
      } else {
        this.pokemonsInDatabase = pokemonsDetail;
      }
    })

  }


  toRunOnceToPopulateFirebaseCards(){
    this.pokemonDataService.getPokemonShortList()
    .subscribe((list: PokemonList[]) => {
      this.getPokemons(list);
    })
  }


  private getPokemons(list: PokemonList[]){
    const arr: Observable<PokemonDetail>[] = [];
    list.map((value: PokemonList) => {
      arr.push(
        this.pokemonDataService.getPokemonDetail(value.url)
        .pipe(map(({id, order, name, height, weight , sprites:{front_default}}) => (
        {
          id,
          order,
          name,
          height,
          weight,
          sprites: {
            front_default
          },
          price: Math.floor(Math.random() * 100),
          stock : 5
        })))
      );
    });

    forkJoin([...arr]).subscribe((pokemons: PokemonDetail[]) => {
        this.pokemons.push(...pokemons);
        this.addCardsToDataBase();
    })
    
  }


  addCardsToDataBase(){
      this.pokemons.forEach(pokemon => {
            this.cardStoreService.addCard(pokemon);
      });
  }



}
