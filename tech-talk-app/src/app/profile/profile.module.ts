import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileListPageComponent } from './profile-list-page/profile-list-page.component';
import { ProfileDetailPageComponent } from './profile-detail-page/profile-detail-page.component';
import { Route, RouterModule } from '@angular/router';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileListItemComponent } from './profile-list/profile-list-item/profile-list-item.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { SharedModule } from '../shared/shared.module';

const routes: Route[] = [
  {path: 'people/page/:page', component: ProfileListPageComponent},
  {path: 'people/:id', component: ProfileDetailPageComponent},
  {path: 'people', redirectTo: 'people/page/1', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    ProfileListPageComponent,
    ProfileDetailPageComponent,
    ProfileListComponent,
    ProfileListItemComponent,
    ProfileDetailsComponent
  ]
})
export class ProfileModule { }
