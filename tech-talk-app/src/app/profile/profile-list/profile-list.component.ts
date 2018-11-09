import { Component, Input, OnInit } from '@angular/core';
import { Profile } from '../profile';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {
  @Input()
  people: Profile[];

  constructor() { }

  ngOnInit() {
  }

}
