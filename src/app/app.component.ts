import {Component} from '@angular/core';
import {MailService} from "./mail.service";

@Component({
  selector: 'app-root',
  template: `
    <h3>{{title}}</h3>
    <ul>
      <li *ngFor="let message of mailService.messages;">
        {{message.text}}
      </li>
    </ul>
    <app-simple-form *ngFor="let message of mailService.messages;"
      [message]="message.text"
      (update)="onUpdate(message.id, $event.text)">
    </app-simple-form>
  `
})
export class AppComponent {
  title = 'Hello, Angular';

  onUpdate(id, text) {
    this.mailService.update(id, text);
  }

  constructor(private mailService: MailService) {}
}