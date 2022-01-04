import { Bd } from './../../../shared/service/bd.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { onAuthStateChanged } from 'firebase/auth';

@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.scss'],
})
export class PostNewComponent implements OnInit {
  public email: string;
  public imageUpload: any;
  public form: FormGroup = new FormGroup({
    titulo: new FormControl(null),
  });
  constructor(private bd: Bd, private auth: Auth) {}

  ngOnInit(): void {
    this.auth.onAuthStateChanged((user: any) => {
      this.email = user.email;
    });
  }

  public postNew(): void {
    this.bd.postNew({
      email: this.email,
      titulo: this.form.value.titulo,
      image: this.imageUpload[0],
    });
  }

  public prevImageUpload(event: Event): void {
    this.imageUpload = (<HTMLInputElement>event.target).files;
  }
}
