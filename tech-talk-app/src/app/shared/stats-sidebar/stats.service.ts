import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { CountResult } from './countResult';
import { CountQuery } from './stats-queries';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private apollo: Apollo) { }

  findCount(): Observable<CountResult> {
    return this.apollo
      .watchQuery<CountResult>({query: CountQuery})
      .valueChanges
      .pipe(map(result => result.data));
  }
}
