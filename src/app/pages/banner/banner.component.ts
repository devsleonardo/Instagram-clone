import { state, style, trigger, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Imagem } from '../../shared/model/bannerImg.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger('banner', [
      state(
        'escondido',
        style({
          opacity: 0,
        })
      ),
      state(
        'visivel',
        style({
          opacity: 1,
        })
      ),
      transition('escondido <=> visivel', animate('3s ease-in')),
    ]),
  ],
})
export class BannerComponent implements OnInit {
  constructor() {}

  public estado: string = 'escondido';
  public imagens: Imagem[] = [
    { estado: 'visivel', url: '../../../assets/banner-acesso/img_1.png' },
    { estado: 'escondido', url: '../../../assets/banner-acesso/img_2.png' },
    { estado: 'escondido', url: '../../../assets/banner-acesso/img_3.png' },
    { estado: 'escondido', url: '../../../assets/banner-acesso/img_4.png' },
    { estado: 'escondido', url: '../../../assets/banner-acesso/img_5.png' },
  ];

  ngOnInit(): void {
    setTimeout(() => this.logicaRotacao(), 3000);
  }

  public logicaRotacao(): void {
    //auxiliar na exibicao da imagem seguinte
    let idx: number;

    //Ocultar Imagem
    for (let i: number = 0; i <= 4; i++) {
      if (this.imagens[i].estado === 'visivel') {
        this.imagens[i].estado = 'escondido';
        idx = i === 4 ? 0 : i + 1;
        break;
      }
    }
    //Exibir Imagem
    this.imagens[idx].estado = 'visivel';

    setTimeout(() => this.logicaRotacao(), 3000);
  }
}
