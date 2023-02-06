import { Injectable } from '@angular/core';
import { 
  addDoc, 
  collection, 
  collectionData, 
  CollectionReference, 
  doc, 
  Firestore, 
  setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
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
    return addDoc(cardRef,card)
  }

  // addCard(card: PokemonDetail){
  //   const cardRef = doc(this.refCollect, String(card.id!));
  //   return setDoc(cardRef,card)
  // }

  //TODO Intentar con los mismos métodos que utilizo en el login para la creación a ver
  //si funciona la firestore


  getCards(): Observable<PokemonDetail[]>{
    const cardRef = collection(this.$firestore, 'cards');
    return collectionData(cardRef, { idField: 'id'}) as Observable<PokemonDetail[]>
  }


  

}
