import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  food = [
    {
      name: 'Producto 1',
      url: 'https://media.istockphoto.com/id/1373003806/es/foto/empanadas-rellenas-de-carne-y-verduras.jpg?s=1024x1024&w=is&k=20&c=5meKmG07LrD8kSUc4ghCUdM60X6ZX914GIsXVurTzRU=',
    },
    {
      name: 'Producto 2',
      url: 'https://media.istockphoto.com/id/1373003806/es/foto/empanadas-rellenas-de-carne-y-verduras.jpg?s=1024x1024&w=is&k=20&c=5meKmG07LrD8kSUc4ghCUdM60X6ZX914GIsXVurTzRU=',
    },
    {
      name: 'Producto 3',
      url: 'https://media.istockphoto.com/id/1373003806/es/foto/empanadas-rellenas-de-carne-y-verduras.jpg?s=1024x1024&w=is&k=20&c=5meKmG07LrD8kSUc4ghCUdM60X6ZX914GIsXVurTzRU=',
    },
    {
      name: 'Producto 4',
      url: 'https://media.istockphoto.com/id/1373003806/es/foto/empanadas-rellenas-de-carne-y-verduras.jpg?s=1024x1024&w=is&k=20&c=5meKmG07LrD8kSUc4ghCUdM60X6ZX914GIsXVurTzRU=',
    },
    {
      name: 'Producto 5',
      url: 'https://media.istockphoto.com/id/1373003806/es/foto/empanadas-rellenas-de-carne-y-verduras.jpg?s=1024x1024&w=is&k=20&c=5meKmG07LrD8kSUc4ghCUdM60X6ZX914GIsXVurTzRU=',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
