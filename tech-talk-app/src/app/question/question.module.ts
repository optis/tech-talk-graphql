import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionListPageComponent } from './question-list-page/question-list-page.component';
import { QuestionDetailPageComponent } from './question-detail-page/question-detail-page.component';
import { Route, RouterModule } from '@angular/router';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionListItemComponent } from './question-list/question-list-item/question-list-item.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PostModule } from '../post/post.module';
import { CreateQuestionPageComponent } from './create-question-page/create-question-page.component';

const routes: Route[] = [
  {path: 'questions/page/:page', component: QuestionListPageComponent},
  {path: 'questions/new', component: CreateQuestionPageComponent},
  {path: 'questions/:id', component: QuestionDetailPageComponent},
  {path: 'questions', redirectTo: 'questions/page/1', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    PostModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    QuestionListPageComponent,
    QuestionDetailPageComponent,
    QuestionListComponent,
    QuestionListItemComponent,
    QuestionFormComponent,
    CreateQuestionPageComponent
  ]
})
export class QuestionModule { }
