import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UserModel } from 'src/app/shared/model/user.model';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter();
  public loginUpp: number;

  public form: FormGroup = new FormGroup({
    verificacao: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
  });

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  public exibirPainelCadastro(): void {
    this.exibirPainel.emit('cadastro');
  }

  public loginUser(): void {
    this.authService
      .loginUser(this.form.value.verificacao, this.form.value.password)
      .subscribe(() => (this.loginUpp = +1));
  }
}
