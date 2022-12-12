import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
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
