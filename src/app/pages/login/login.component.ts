import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter();

  public form: FormGroup = new FormGroup({
    verificacao: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
  });

  constructor() {}

  ngOnInit(): void {}

  public exibirPainelCadastro(): void {
    this.exibirPainel.emit('cadastro');
  }

  public loginUsuario(): void {
    console.log(this.form.value);
  }
}
