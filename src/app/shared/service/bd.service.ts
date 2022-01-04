import { Injectable } from '@angular/core';
import { Database, set, ref } from '@angular/fire/database';

@Injectable()
export class Bd {
  constructor(private dataBase: Database) {}

  public postNew(post: any): void {
    console.log(post);

    let nomeImage = Date.now();

    set(ref(this.dataBase, 'post/' + post.titulo), {
      email: post.email,
      titulo: post.titulo,
    });
  }
}
