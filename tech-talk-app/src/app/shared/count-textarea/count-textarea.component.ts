import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-count-textarea',
  templateUrl: './count-textarea.component.html',
  styleUrls: ['./count-textarea.component.scss']
})
export class CountTextareaComponent implements OnChanges, OnDestroy {
  @Input()
  rows: number;
  @Input()
  maxLength: number;
  @Input()
  name: string;
  @Input()
  formGroup: FormGroup;
  @Output()
  onChange: EventEmitter<string> = new EventEmitter();
  length = 0;
  private destroy: Subject<void> = new Subject<void>();

  constructor() { }

  ngOnChanges() {
    this.length = this.formGroup.get(this.name).value.length;
    this.formGroup.get(this.name).valueChanges
      .pipe(map(value => value.length), takeUntil(this.destroy))
      .subscribe(length => this.length = length);
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.unsubscribe();
  }
}
