import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-navigate-back',
  templateUrl: './navigate-back.component.html',
  styleUrls: ['./navigate-back.component.css']
})
export class NavigateBackComponent implements OnInit {
  currentLocation: string;
  show: boolean;

  constructor(
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.currentLocation = this.location.path();
    this.router.events
      .subscribe(
        event => {
          if (event instanceof NavigationEnd) {
            this.show = this.location.path() !== '/users';
          }
        }
      );
  }

  onClick(): void {
    this.location.back();
  }

}
