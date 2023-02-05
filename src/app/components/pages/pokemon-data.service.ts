import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { PokemonList } from 'src/app/models/pokemonList';
import { map, Observable } from 'rxjs';
import { PokemonDetail } from 'src/app/models/pokemonDetail';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataService {

  private baseUrl = '/pokemon/'

  // private baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }


  // getPokemonShortList(): Observable<PokemonList[]>{
  //   return this.http.get<PokemonList[]>(`${this.baseUrl}pokemon`)
  //   .pipe(
  //     map((x:any) => x.results)
  //   )
  // }

  getPokemonShortList(): Observable<PokemonList[]>{
    return this.http.get<PokemonList[]>(`${this.baseUrl}`)
    .pipe(
      map((x:any) => x.results)
    )
  }


  // getPokemonDetail(pokemon: string): Observable<PokemonDetail>{
  //   return this.http.get<PokemonDetail>(`${this.baseUrl}/pokemon/${pokemon}`);
  // }

  getPokemonDetail(pokemon: string): Observable<PokemonDetail>{
    return this.http.get<PokemonDetail>(`${this.baseUrl}/${pokemon}`);
  }


}
