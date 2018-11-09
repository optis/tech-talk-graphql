import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Pagination } from '../shared/pagination';
import { Observable } from 'rxjs';
import { ProfileListResult } from './profile-list-result';
import { ProfileDetailQuery, ProfileListQuery } from './profile-queries';
import { first, map } from 'rxjs/operators';
import { ProfileDetailResult } from './profile-detail-result';
import { Profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private apollo: Apollo) { }

  findAll(pagination: Pagination): Observable<ProfileListResult> {
    return this.apollo
      .query<ProfileListResult>({query: ProfileListQuery, variables: {pagination}, fetchPolicy: 'no-cache'})
      .pipe(map(result => result.data), first());
  }

  findOne(id: number): Observable<Profile> {
    return this.apollo
      .query<ProfileDetailResult>({query: ProfileDetailQuery, variables: {id}})
      .pipe(map(result => result.data), map(result => result.profile), first());
  }
}
