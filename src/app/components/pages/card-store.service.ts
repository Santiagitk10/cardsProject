import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { PokemonDetail } from 'src/app/models/pokemonDetail';

@Injectable({
  providedIn: 'root'
})
export class CardStoreService {

  constructor(private firestore: Firestore) { }


  addCard(card: PokemonDetail){
    const cardRef = collection(this.firestore, 'cards');
    return addDoc(cardRef,card)
  }

  //TODO Intentar con los mismos métodos que utilizo en el login para la creación a ver
  //si funciona la firestore

}
