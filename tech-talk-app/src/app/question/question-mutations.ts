import gql from 'graphql-tag';

export const CreateQuestionMutation = gql`mutation CreateQuestion($input: QuestionInput!) {
  createQuestion(input: $input) {
    id
  }
}`;

export const CreateAnswerMutation = gql`mutation CreateAnswer($input: PostInput!) {
  createAnswer(input: $input) {
    id
    content
    postedAt
    author {
      id
      username
      avatar
    }
  }
}`;
