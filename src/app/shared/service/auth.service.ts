import { UserModel } from 'src/app/shared/model/user.model';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { from } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor(private auth: Auth) {}

  public registerUser(user: UserModel) {
    return from(
      createUserWithEmailAndPassword(this.auth, user.email, user.password)
        .then((res: any) => {
          console.log(res);
        })
        .catch((error: any) => console.log(error))
    );
  }
}
