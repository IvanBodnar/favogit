import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  message: string;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
        'search': new FormControl(null, [ Validators.required ])
    });

  }

  private _clearFields(): void {
    this.searchForm.get('search').setValue(null);
  }

  // Llama a fetchUsers y navega a /users. La lista de usuarios
  // va a estar disponible en UserService para que la consuma UserListComponent
  onSubmit() {
    const matchTerm = this.searchForm.value.search;
    this.userService.fetchUsers( matchTerm );
    this.userService.matchTerm = matchTerm;

    setTimeout(() => {
      this.userService.usersCount$.subscribe(
        count =>  this.message = `Matches: ${ count.toLocaleString() }`,
        error => console.log(error)
      );
    }, 1000);

    this._clearFields();
    this.router.navigate( ['/users'] );
  }
}
