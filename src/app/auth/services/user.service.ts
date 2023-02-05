import { Injectable } from '@angular/core';
import { Auth, User } from '@angular/fire/auth';
import { 
  collection, 
  CollectionReference, 
  doc, 
  Firestore, 
  setDoc } from '@angular/fire/firestore';
import { UserModel } from 'src/app/models/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private $auth: Auth, private $fireStore: Firestore) { }

  private refCollect: CollectionReference = collection(
    this.$fireStore,
    'users'
  );


  public get currentUser(): User | null {
    return this.$auth.currentUser;
  }

  public createUser(user: UserModel){
    const userRef = doc(this.refCollect, user.uid!);
    return setDoc(userRef, user)
  }

}
