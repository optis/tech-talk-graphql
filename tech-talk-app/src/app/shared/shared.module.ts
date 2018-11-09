import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { StatsSidebarComponent } from './stats-sidebar/stats-sidebar.component';
import { CountTextareaComponent } from './count-textarea/count-textarea.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CountTextfieldComponent } from './count-textfield/count-textfield.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ErrorBarComponent } from './error-bar/error-bar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    SidebarComponent,
    StatsSidebarComponent,
    CountTextareaComponent,
    CountTextfieldComponent,
    PaginationComponent,
    ErrorBarComponent
  ],
  exports: [
    SidebarComponent,
    StatsSidebarComponent,
    CountTextareaComponent,
    CountTextfieldComponent,
    PaginationComponent,
    ErrorBarComponent
  ]
})
export class SharedModule { }
