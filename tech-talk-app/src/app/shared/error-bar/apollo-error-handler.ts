import { Observable, Subject } from 'rxjs';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

export namespace ApolloErrorHandler {
  const subject: Subject<string> = new Subject<string>();
  export const errors: Observable<string> = subject.asObservable();
  export const link: ApolloLink = onError(errorHandler => {
    const {networkError, graphQLErrors} = errorHandler;
    if (networkError != null) {
      subject.next('There\'s a technical issue, please try again later');
    }
    if (graphQLErrors != null) {
      graphQLErrors.forEach(error => subject.next(error.message));
    }
  });
}
