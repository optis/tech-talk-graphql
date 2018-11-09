import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostInput } from '../post-input';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnChanges {
  @Input()
  input: PostInput;
  @Output()
  onSave: EventEmitter<PostInput> = new EventEmitter<PostInput>();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnChanges() {
    this.form = this.fb.group({
      content: this.fb.control(this.input.content, [Validators.required, Validators.maxLength(1000)])
    });
  }

  updateContent(content) {
    this.form.get('content').setValue(content);
  }

  save() {
    const content = this.form.get('content').value;
    const questionId = this.input.questionId;
    this.onSave.emit({questionId, content});
  }
}
