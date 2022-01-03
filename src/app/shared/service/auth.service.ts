import { Database, getDatabase, ref, set } from '@angular/fire/database';

import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/shared/model/user.model';

import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { from } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private auth: Auth, private dataBase: Database) {}

  public registerUser(user: UserModel) {
    return from(
      createUserWithEmailAndPassword(this.auth, user.email, user.password)
        .then((res: any) => {
          console.log(res);
          //registrando dados complementares do usuario
          set(ref(this.dataBase, user.nameUser), {
            nameFull: user.nameFull,
            nameUser: user.nameUser,
            numberPhone: user.numberPhone,
          });
        })
        .catch((error: any) => console.log(error))
    );
  }
}
