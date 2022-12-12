import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  slides = [
    { image: 'assets/images/coding.png' },
    { image: 'assets/images/coding.png' },
    { image: 'assets/images/coding.png' },
    { image: 'assets/images/coding.png' },
    { image: 'assets/images/coding.png' },
  ];

  news = [
    {
      image: 'assets/images/coding.png',
      title: 'Noticia',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    },
    {
      image: 'assets/images/coding.png',
      title: 'Noticia',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    },
    {
      image: 'assets/images/coding.png',
      title: 'Noticia',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    },
    {
      image: 'assets/images/coding.png',
      title: 'Noticia',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    },
    {
      image: 'assets/images/coding.png',
      title: 'Noticia',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    },
    {
      image: 'assets/images/coding.png',
      title: 'Noticia',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
