import gql from 'graphql-tag';

export const QuestionListQuery = gql`query QuestionList($pagination: Pagination!) {
  questionCount
  questions(pagination: $pagination) {
    id
    title
    answerCount
    firstPost {
      id
      postedAt
      author {
        id
        username
        avatar
      }
    }
  }
}`;

export const QuestionDetailQuery = gql`query QuestionDetail($id: ID!) {
  question(id: $id) {
    id
    title
    firstPost {
      id
      content
      postedAt
      author {
        id
        username
        avatar
      }
    }
    answers {
      id
      content
      postedAt
      author {
        id
        username
        avatar
      }
    }
  }
}`;
