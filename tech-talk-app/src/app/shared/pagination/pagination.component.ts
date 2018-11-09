import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Pagination } from '../pagination';
import { Observable, range } from 'rxjs';
import { filter, map, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input()
  currentPage = 1;
  @Input()
  size = 10;
  @Input()
  totalElements = 0;
  @Input()
  range = 3;
  @Output()
  onChange: EventEmitter<Pagination> = new EventEmitter<Pagination>();
  totalPages: number;
  pages: Observable<number[]>;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.totalPages = this.getTotalPages();
    this.pages = range(-this.range, this.range * 2 + 1)
      .pipe(map(offset => this.currentPage + offset), filter(page => this.isValidPage(page)), toArray());
  }

  getTotalPages(): number {
    return Math.ceil(Math.max(this.totalElements, 1) / Math.max(this.size, 1));
  }

  isValidPage(page): boolean {
    return page > 0 && page <= this.totalPages;
  }

  selectPage(page) {
    this.onChange.emit({page, size: this.size});
  }
}
