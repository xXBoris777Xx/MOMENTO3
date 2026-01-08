import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
})
export class StorePage {

  productos = [
    {
      nombre: 'Vestido Diva',
      precio: '$35.00',
      imagen: 'https://via.placeholder.com/300x200'
    },
    {
      nombre: 'Blusa Elegante',
      precio: '$22.00',
      imagen: 'https://via.placeholder.com/300x200'
    },
    {
      nombre: 'Conjunto Fashion',
      precio: '$48.00',
      imagen: 'https://via.placeholder.com/300x200'
    }
  ];

  constructor() {}

}

