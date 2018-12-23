import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {UserService} from '../../services/user.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
        'search': new FormControl(null, [ Validators.required ])
    });

  }

  private _clearFields(): void {
    this.searchForm.get('search').setValue(null);
  }

  onSubmit() {
    this.userService.fetchUsers(this.searchForm.value.search)
      .subscribe(
        users => console.log(users)
      );
    this._clearFields();
  }
}
