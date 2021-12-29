import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  animations: [
    trigger('animacao-banner', [
      state(
        'criado',
        style({
          opacity: 1,
        })
      ),
      transition('void => criado', [
        style({
          opacity: 0,
          transform: 'translate(-150px,0)',
        }),
        animate('1000ms 0s ease-in-out'), // duracao, delay, aceleraçao
      ]),
    ]),
    trigger('animacao-painel', [
      state(
        'criado',
        style({
          opacity: 1,
        })
      ),
      transition('void => criado', [
        style({
          opacity: 0,
          transform: 'translate(150px,0)',
        }),
        animate('1000ms 0s ease-in-out'), // duracao, delay, aceleraçao
      ]),
    ]),
  ],
})
export class PagesComponent implements OnInit {
  public estadoBanner: string = 'criado';
  public estadoPainel: string = 'criado';
  public cadastro: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  public exibirPainel(event: string): void {
    this.cadastro = event === 'cadastro' ? true : false;
  }
}
