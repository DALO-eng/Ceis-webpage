import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  personal = [
    {
      name: 'Jorge',
      photo: 'assets/images/member.png',
    },
    {
      name: 'Jorge',
      photo: 'assets/images/member.png',
    },
    {
      name: 'Jorge',
      photo: 'assets/images/member.png',
    },
    {
      name: 'Jorge',
      photo: 'assets/images/member.png',
    },
    {
      name: 'Jorge',
      photo: 'assets/images/member.png',
    },
    {
      name: 'Jorge',
      photo: 'assets/images/member.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
