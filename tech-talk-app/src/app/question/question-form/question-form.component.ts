import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionInput } from '../question-input';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnChanges {
  @Input()
  input: QuestionInput;
  @Output()
  onSave: EventEmitter<QuestionInput> = new EventEmitter<QuestionInput>();
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnChanges() {
    this.form = this.fb.group({
      title: this.fb.control(this.input.title, [Validators.required, Validators.maxLength(100)]),
      content: this.fb.control(this.input.content, [Validators.required, Validators.maxLength(1000)])
    });
  }

  updateContent(content) {
    this.form.get('content').setValue(content);
  }

  updateTitle(title) {
    this.form.get('title').setValue(title);
  }

  save() {
    const title = this.form.get('title').value;
    const content = this.form.get('content').value;
    this.onSave.emit({title, content})
  }
}
