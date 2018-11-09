import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatsService } from './stats.service';
import { CountResult } from './countResult';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-stats-sidebar',
  templateUrl: './stats-sidebar.component.html',
  styleUrls: ['./stats-sidebar.component.scss']
})
export class StatsSidebarComponent implements OnInit, OnDestroy {
  result: CountResult;
  private destroy: Subject<void> = new Subject<void>();

  constructor(private router: Router, private service: StatsService) { }

  ngOnInit() {
    this.service.findCount()
      .pipe(takeUntil(this.destroy))
      .subscribe(result => this.result = result);
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.unsubscribe();
  }

  ask() {
    this.router.navigateByUrl('/questions/new');
  }
}
