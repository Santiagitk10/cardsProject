import { Injectable } from '@angular/core';
import { 
  addDoc, 
  collection, 
  CollectionReference, 
  doc, 
  Firestore, 
  setDoc } from '@angular/fire/firestore';
import { PokemonDetail } from 'src/app/models/pokemonDetail';

@Injectable({
  providedIn: 'root'
})
export class CardStoreService {

  constructor(private $firestore: Firestore) { }

  // private refCollect: CollectionReference = collection(
  //   this.$firestore,
  //   'pokemons'
  // )

  addCard(card: PokemonDetail){
    const cardRef = collection(this.$firestore, 'cards');
    console.log(cardRef);
    return addDoc(cardRef,card)
  }

  // addCard(card: PokemonDetail){
  //   const cardRef = doc(this.refCollect, String(card.id!));
  //   return setDoc(cardRef,card)
  // }

  //TODO Intentar con los mismos métodos que utilizo en el login para la creación a ver
  //si funciona la firestore

}
