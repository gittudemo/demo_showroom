import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface Door {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  doors: Door[] = [
    {
      id: 1,
      name: 'Classic Oak Door',
      price: 10000,
      imageUrl: 'assets/doors/design1.jpg',
      description: 'Elegant oak finish for a timeless look.',
    },
    {
      id: 2,
      name: 'Modern Steel Door',
      price: 15000,
      imageUrl: 'assets/doors/design2.jpg',
      description: 'High security and sleek modern design.',
    },
    {
      id: 3,
      name: 'Glass Patio Door',
      price: 18000,
      imageUrl: 'assets/doors/design3.png',
      description: 'Maximize natural light with this sliding glass door.',
    },
    {
      id: 4,
      name: 'Rustic Pine Door',
      price: 17000,
      imageUrl: 'assets/doors/design4.png',
      description: 'Natural pine wood for a cozy, rustic feel.',
    },
    {
      id: 5,
      name: 'Contemporary White Door',
      price: 18000,
      imageUrl: 'assets/doors/design5.jpg',
      description: 'Clean, minimal white finish for any room.',
    },
    {
      id: 6,
      name: 'Luxury Mahogany Door',
      price: 12000,
      imageUrl: 'assets/doors/design6.png',
      description: 'Premium mahogany wood for an opulent entrance.',
    },
  ];
}
