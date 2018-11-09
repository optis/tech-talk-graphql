import gql from 'graphql-tag';

export const ProfileListQuery = gql`query ProfileList($pagination: Pagination!) {
  profileCount
  profiles(pagination: $pagination) {
    id
    username
    title
    avatar
  }
}`;

export const ProfileDetailQuery = gql`query ProfileDetail($id: ID!) {
  profile(id: $id) {
    id
    username
    title
    avatar
    bio
    questionCount
    answerCount
  }
}`;
