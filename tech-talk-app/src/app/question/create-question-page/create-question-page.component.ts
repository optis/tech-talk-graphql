import { Component, OnInit } from '@angular/core';
import { QuestionInput } from '../question-input';
import { Router } from '@angular/router';
import { QuestionService } from '../question.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-create-question-page',
  templateUrl: './create-question-page.component.html',
  styleUrls: ['./create-question-page.component.scss']
})
export class CreateQuestionPageComponent implements OnInit {
  newQuestion: QuestionInput = {title: '', content: ''};

  constructor(private router: Router, private service: QuestionService) { }

  ngOnInit() {
  }

  createQuestion(input: QuestionInput) {
    this.service
      .createQuestion(input)
      .pipe(map(question => question.id))
      .subscribe(id => this.router.navigateByUrl(`/questions/${id}`));
  }
}
