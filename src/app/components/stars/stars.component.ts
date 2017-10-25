import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Star }         from '../../star';
import { StarService }  from '../../services/star.service';

@Component({
  selector: 'stars',
  templateUrl: './stars.component.html',
  styleUrls: [ './stars.component.css' ]
})
export class StarsComponent implements OnInit {
  stars: Star[];
  selectedStar: Star;

  constructor(
    private router: Router,
    private starService: StarService) { }

  getStars(): void {
    this.starService.getStars().then(stars => this.stars = stars);
  }

  ngOnInit(): void {
    this.getStars();
  }

  onSelect(star: Star): void {
    this.selectedStar = star;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedStar.id]);
  }
}