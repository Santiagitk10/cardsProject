import { PokemonDetail } from "./pokemonDetail";

export interface UserModel {
    uid?: string;
    name: string;
    image: string;
    email?: string;
    balance: number;
    modifiedDate: number;
    cards: PokemonDetail[];
  }

