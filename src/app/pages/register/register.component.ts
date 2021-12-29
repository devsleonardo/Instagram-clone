import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  public exibirPainelLogin(): void {
    this.exibirPainel.emit('login');
  }
}
