import { Component, OnInit } from '@angular/core';

import { Star } from '../../star';
import { StarService } from '../../services/star.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  stars: Star[] = [];

  constructor(private starService: StarService) { }

  ngOnInit(): void {
    this.starService.getStars()
      .then(stars => this.stars = stars.slice(1, 5));
  }
}