import { Star } from '../star';
import { STARS } from '../services/starsdata';
import { Injectable } from '@angular/core';

@Injectable()
export class StarService {
  getStars(): Promise<Star[]> {
    return Promise.resolve(STARS);
  }

  getStarsSlowly(): Promise<Star[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getStars()), 2000);
    });
  }

  getStar(id: number): Promise<Star> {
    return this.getStars()
               .then(stars => stars.find(star => star.id === id));
  }
}