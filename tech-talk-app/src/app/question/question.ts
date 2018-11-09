import { Post } from '../post/post';

export interface Question {
  id: number;
  title?: String;
  firstPost?: Post;
  answers?: Post[];
  answerCount?: number;
}
