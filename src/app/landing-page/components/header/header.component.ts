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
  constructor() {}

  ngOnInit(): void {}
}
