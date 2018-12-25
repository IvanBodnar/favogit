import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { HighlightMatchPipe } from './pipes/highlight-match.pipe';

@NgModule({
  declarations: [
    UserDetailComponent,
    UserListComponent,
    HighlightMatchPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class UserModule { }
