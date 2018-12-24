import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  private _messageText: string;
  @Input()
  set messageText( message: string ) {
    this._messageText = message;
    if (message) { this.showMessage(); }
  }
  opacity = { 'opacity': 0 };

  constructor() { }

  ngOnInit() {
  }

  showMessage(): void {
    this.opacity = { 'opacity': 0.9 };
  }

  hideMessage(): void {
    this.opacity = { 'opacity': 0 };
  }

}
