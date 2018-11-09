import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { ProfileService } from '../profile.service';
import { ActivatedRoute } from '@angular/router';
import { first, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-profile-detail-page',
  templateUrl: './profile-detail-page.component.html',
  styleUrls: ['./profile-detail-page.component.scss']
})
export class ProfileDetailPageComponent implements OnInit {
  profile: Profile;

  constructor(private service: ProfileService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .pipe(map(params => params.id), switchMap(id => this.service.findOne(id)), first())
      .subscribe(profile => this.profile = profile);
  }

}
