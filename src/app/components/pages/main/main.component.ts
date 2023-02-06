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


  pokemons: PokemonDetail[] = [];
  

  constructor(private pokemonDataService: PokemonDataService, 
    private cardStoreService: CardStoreService ){

  }

  ngOnInit(): void {
    //TODO PODRÍA HABER UN IF QUE VALIDE SI ESTÁ LA DATA EN FIREBASE Y SI NO HAY NADA QUE
    //HAGA EL REQUEST Y ENVÍE LOS DATOS A FIREBASE 
    this.toRunOnceToPopulateFirebaseCards();
    // this.addCardsToDataBase();
      //     fetch("https://pokeapi.co/api/v2/pokemon")
     //     .then(r => {
    //     console.log(r)
    //     return r.json();
    // })
    // .then(r => console.log(r))
    // .catch(err => console.error(err));
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
          }
        })))
      );
    });

    forkJoin([...arr]).subscribe((pokemons: PokemonDetail[]) => {
      this.pokemons.push(...pokemons);
      this.addCardsToDataBase();
    })

  }


  addCardsToDataBase(){
    console.log(this.pokemons);
    // for(let i = 0; i< this.pokemons.length; i++){
    //   console.log(this.pokemons[i]);
    //   const response = this.cardStoreService.addCard(pokemon);
    // }
    this.pokemons.forEach(pokemon => {
      console.log(pokemon);
      const response = this.cardStoreService.addCard(pokemon);
      console.log(response);
    });
  }




}
