import { Component, OnInit } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import { forkJoin, map, Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UserService } from 'src/app/auth/services/user.service';
import { PokemonDetail } from 'src/app/models/pokemonDetail';
import { PokemonList } from 'src/app/models/pokemonList';
import { UserModel } from 'src/app/models/userModel';
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
  users: UserModel[] = [];
  user?: UserModel;


  constructor(
    private pokemonDataService: PokemonDataService,
    private cardStoreService: CardStoreService,
    private $userService: UserService
  )
  { }

  ngOnInit(): void {
    this.cardStoreService.getCards().subscribe(pokemonsDetail => {
      if(pokemonsDetail.length === 0){
        this.toRunOnceToPopulateFirebaseCards();
      } else {
        this.pokemonsInDatabase = pokemonsDetail;
      }
    })


    getAuth().onAuthStateChanged(user => {
      this.$userService.getUserById(user!.uid).subscribe({
        next: (users) => {
          this.users = users;
          this.user = this.users[0];
          console.log(this.user);
        }
      })
    }

    );


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
