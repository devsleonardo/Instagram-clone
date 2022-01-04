import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/shared/model/user.model';

import { from, Observable } from 'rxjs';

import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
import { Database, ref, set } from '@angular/fire/database';
import { signOut } from 'firebase/auth';

@Injectable()
export class AuthService {
  constructor(private auth: Auth, private dataBase: Database, private router: Router) {}

  public token_id: string;
  public loginUpp: number;

  public registerUser(user: UserModel): Observable<any> {
    return from(
      createUserWithEmailAndPassword(this.auth, user.email, user.password)
        .then(() => {
          //registrando dados complementares do usuario via DataBase
          set(ref(this.dataBase, `register/${user.nameUser}`), {
            nameFull: user.nameFull,
            nameUser: user.nameUser,
            numberPhone: user.numberPhone,
          });
        })
        .catch((error: any) => console.log(error))
    );
  }

  public loginUser(email: string, password: string): Observable<any> {
    return from(
      signInWithEmailAndPassword(this.auth, email, password)
        .then(() =>
          this.auth.currentUser.getIdToken().then((idToken: string) => {
            this.token_id = idToken;
            localStorage.setItem('idToken', idToken); // Mander persistencia no browser
            this.router.navigate(['/home']); // Forcar navegação
          })
        )
        .catch((erro) => {
          console.log(erro);
        })
    );
  }

  public authValidade(): boolean {
    if (this.token_id === undefined && localStorage.getItem('idToken') !== null) {
      this.token_id = localStorage.getItem('idToken');
    }

    if (this.token_id === undefined) {
      this.router.navigate(['/']);
    }

    return this.token_id !== undefined;
  }

  public logoutUser(): void {
    signOut(this.auth).then(() => {
      localStorage.removeItem('idToken');
      this.token_id = undefined;
      this.router.navigate(['/']);
      this.loginUpp = undefined;
    });
  }
}
