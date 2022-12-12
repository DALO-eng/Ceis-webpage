import { Component, OnInit } from '@angular/core';
import {
  faInstagram,
  faWhatsapp,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;
  faFacebook = faFacebook;

  items = [
    {
      label: 'Inicio',
      routerLink: '/home',
    },
    {
      label: 'Quienes somos',
      routerLink: '/about-us',
    },
    {
      label: 'Productos',
      routerLink: '/products',
    },
    {
      label: 'Servicios',
      routerLink: '/services',
    },
    {
      label: 'Calendario',
      routerLink: '/calendar',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
