import gql from 'graphql-tag';

export const CountQuery = gql`query Count {
  profileCount
  questionCount
}
`;
