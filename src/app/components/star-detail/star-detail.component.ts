import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Star }         from '../../star';
import { StarService }  from '../../services/star.service';

@Component({
  selector: 'star-detail',
  templateUrl: './star-detail.component.html',
  
})
export class StarDetailComponent implements OnInit {
  star: Star;

  constructor(
    private starService: StarService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.starService.getStar(+params['id']))
      .subscribe(star => this.star = star);
  }

  goBack(): void {
    this.location.back();
  }
}