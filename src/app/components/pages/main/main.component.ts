import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
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
    this.addCardsToDataBase();
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
        this.pokemonDataService.getPokemonDetail(value.name)
      );
    });

    forkJoin([...arr]).subscribe((pokemons: PokemonDetail[]) => {
      this.pokemons.push(...pokemons);
    })

  }


  addCardsToDataBase(){
    console.log(this.pokemons);
    this.pokemons.forEach(pokemon => {
      const response = this.cardStoreService.addCard(pokemon);
      console.log(response);
    });
  }




}
