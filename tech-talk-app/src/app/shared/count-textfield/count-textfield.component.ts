import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-count-textfield',
  templateUrl: './count-textfield.component.html',
  styleUrls: ['./count-textfield.component.scss']
})
export class CountTextfieldComponent implements OnChanges, OnDestroy {
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
