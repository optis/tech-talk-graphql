import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';
import { QuestionListResult } from '../question-list-result';
import { Pagination } from '../../shared/pagination';

@Component({
  selector: 'app-question-list-page',
  templateUrl: './question-list-page.component.html',
  styleUrls: ['./question-list-page.component.scss']
})
export class QuestionListPageComponent implements OnInit {
  result: QuestionListResult;
  page = 1;
  size = 10;

  constructor(private service: QuestionService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.pipe(
        map(params => params.page),
        map(page => parseInt(page, 10)),
        tap(page => this.page = page),
        map(page => ({page: page, size: this.size})),
        switchMap(pagination => this.service.findAll(pagination)))
      .subscribe(result => this.result = result);
  }

  changePage(pagination: Pagination) {
    this.router.navigateByUrl(`/questions/page/${pagination.page}`);
  }
}
