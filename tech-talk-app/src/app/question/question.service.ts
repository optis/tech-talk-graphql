import { Injectable } from '@angular/core';
import { Pagination } from '../shared/pagination';
import { Apollo } from 'apollo-angular';
import { QuestionDetailQuery, QuestionListQuery } from './question-queries';
import { QuestionListResult } from './question-list-result';
import { first, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { QuestionDetailResult } from './question-detail-result';
import { Question } from './question';
import { QuestionInput } from './question-input';
import { CreateAnswerMutation, CreateQuestionMutation } from './question-mutations';
import { CreateQuestionResult } from './create-question-result';
import { PostInput } from '../post/post-input';
import { Post } from '../post/post';
import { CreateAnswerResult } from '../post/create-answer-result';
import { CountQuery } from '../shared/stats-sidebar/stats-queries';
import { ProfileDetailQuery } from '../profile/profile-queries';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private apollo: Apollo) { }

  findAll(pagination: Pagination): Observable<QuestionListResult> {
    return this.apollo
      .query<QuestionListResult>({query: QuestionListQuery, variables: {pagination}, fetchPolicy: 'no-cache'})
      .pipe(map(result => result.data), first());
  }

  findOne(id: number): Observable<Question> {
    return this.apollo
      .query<QuestionDetailResult>({query: QuestionDetailQuery, variables: {id}})
      .pipe(map(result => result.data), map(result => result.question), first());
  }

  createQuestion(input: QuestionInput): Observable<Question> {
    return this.apollo
      .mutate<CreateQuestionResult>({
        mutation: CreateQuestionMutation,
        refetchQueries: [{query: CountQuery}],
        variables: {input}
      })
      .pipe(map(result => result.data), map(result => result.createQuestion), first());
  }

  createAnswer(input: PostInput): Observable<Post> {
    return this.apollo
      .mutate<CreateAnswerResult>({
        mutation: CreateAnswerMutation,
        variables: {input},
        refetchQueries: [
          {query: QuestionDetailQuery, variables: {id: input.questionId}},
          {query: ProfileDetailQuery, variables: {id: 1}}]
      })
      .pipe(map(result => result.data), map(result => result.createAnswer), first());
  }
}
