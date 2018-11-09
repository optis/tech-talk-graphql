import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { environment } from '../environments/environment';
import { ApolloLink } from 'apollo-link';
import { ApolloErrorHandler } from './shared/error-bar/apollo-error-handler';
import graphQLHandler = ApolloErrorHandler.link;

const uri = environment.api;
export function createApollo(httpLink: HttpLink) {
  return {
    link: ApolloLink.from([graphQLHandler, httpLink.create({uri})]),
    cache: new InMemoryCache()
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
