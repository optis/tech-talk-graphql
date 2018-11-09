import { Question } from './question';

export interface QuestionListResult {
  questionCount: number;
  questions: Question[];
}
