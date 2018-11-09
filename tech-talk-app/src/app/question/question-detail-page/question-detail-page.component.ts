import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { PostInput } from '../../post/post-input';
import { QuestionService } from '../question.service';
import { ActivatedRoute } from '@angular/router';
import { first, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-question-detail-page',
  templateUrl: './question-detail-page.component.html',
  styleUrls: ['./question-detail-page.component.scss']
})
export class QuestionDetailPageComponent implements OnInit {
  newAnswer: PostInput;
  question: Question;

  constructor(private service: QuestionService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .pipe(map(params => params.id), switchMap(id => this.service.findOne(id)), first())
      .subscribe(question => {
        this.question = question;
        this.newAnswer = {questionId: question.id, content: ''};
      });
  }

  createAnswer(input: PostInput) {
    this.service
      .createAnswer(input)
      .subscribe(answer => {
        this.question.answers.push(answer);
        this.newAnswer = {questionId: this.question.id, content: ''}
      });
  }
}
