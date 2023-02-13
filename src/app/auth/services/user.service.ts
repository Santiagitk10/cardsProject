import { Injectable } from '@angular/core';
import { Auth, User } from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';
import {
  collectionData,
  CollectionReference,
  doc,
  docData,
  Firestore,
  setDoc } from '@angular/fire/firestore';
  import { collection, query, where} from '@firebase/firestore'
import { Observable } from 'rxjs';
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

  public createUser(user: UserModel){
    const userRef = doc(this.refCollect, user.uid!);
    return setDoc(userRef, user)
  }


  public getUserById(uid: string): Observable<UserModel[]> {
    const query_users = query(
      this.refCollect,
      where('uid', '==', uid)
    );
    return collectionData(query_users, { idField: 'uid'}) as Observable<UserModel[]>
  }

}

