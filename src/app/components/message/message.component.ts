import {Component, Input, OnInit} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  _messageText: string;
  @Input()
  set messageText( message: string ) {
    this._messageText = message;
    if (message) { this.showMessage(); }
  }
  opacity = { 'opacity': 0 };

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    // Esconder el mensaje si se inicia navegación
    this.router.events
      .subscribe(
        event => {
          if (event instanceof NavigationStart) {
            this.hideMessage();
          }
        }
      );
  }

  showMessage(): void {
    this.opacity = { 'opacity': 0.9 };
  }

  hideMessage(): void {
    this.opacity = { 'opacity': 0 };
  }

}
