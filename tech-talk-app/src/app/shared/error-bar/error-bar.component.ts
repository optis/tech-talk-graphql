import { Component, OnInit } from '@angular/core';
import { ApolloErrorHandler } from './apollo-error-handler';
import errors = ApolloErrorHandler.errors;

@Component({
  selector: 'app-error-bar',
  templateUrl: './error-bar.component.html',
  styleUrls: ['./error-bar.component.scss']
})
export class ErrorBarComponent implements OnInit {
  messages: string[] = [];

  constructor() { }

  ngOnInit() {
    errors.subscribe(message => this.messages.push(message));
  }

}
