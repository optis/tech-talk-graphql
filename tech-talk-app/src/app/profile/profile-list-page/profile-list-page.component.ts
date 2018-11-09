import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { ProfileService } from '../profile.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';
import { ProfileListResult } from '../profile-list-result';
import { Pagination } from '../../shared/pagination';

@Component({
  selector: 'app-profile-list-page',
  templateUrl: './profile-list-page.component.html',
  styleUrls: ['./profile-list-page.component.scss']
})
export class ProfileListPageComponent implements OnInit {
  result: ProfileListResult;
  page = 1;
  size = 9;

  constructor(private service: ProfileService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.pipe(
      map(params => params.page),
      map(page => parseInt(page, 10)),
      tap(page => this.page = page),
      map(page => ({page: page, size: this.size})),
      switchMap(pagination => this.service.findAll(pagination))
    ).subscribe(result => this.result = result);
  }

  changePage(pagination: Pagination) {
    this.router.navigateByUrl(`/people/page/${pagination.page}`);
  }
}
