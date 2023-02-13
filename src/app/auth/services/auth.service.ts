import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, signOut } from '@angular/fire/auth';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private $auth: Auth, private $user: UserService) { }


  loginGoogle() {
    return signInWithPopup(this.$auth, new GoogleAuthProvider()).then(
      ({ user: { displayName, email, photoURL, uid}}) => {
        console.log(this.$auth.currentUser);
        this.$user.createUser({
          uid: uid!,
          name: displayName!,
          image: photoURL!,
          email: email!,
          balance : 0,
          modifiedDate : 0,
          cards : []
        });
      }
    )
  }

  logout(){
    signOut(this.$auth);
  }

}
