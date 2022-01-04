import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UserModel } from 'src/app/shared/model/user.model';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter();

  public form: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    nameFull: new FormControl(null, [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(120),
    ]),
    nameUser: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
    ]),
    numberPhone: new FormControl(null, [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(20),
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
    ]),
  });

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  public exibirPainelLogin(): void {
    this.exibirPainel.emit('login');
  }

  public registerUser(): void {
    const user: UserModel = new UserModel(
      this.form.value.email,
      this.form.value.nameFull,
      this.form.value.nameUser,
      this.form.value.numberPhone,
      this.form.value.password
    );

    this.authService.registerUser(user).subscribe(() => {
      alert('Cadastro Concluido'), this.exibirPainelLogin();
    });
  }
}
