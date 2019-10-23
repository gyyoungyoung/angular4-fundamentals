import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
    {{message}}
    <input #myInput type="text" [(ngModel)]="message">
    <button (click)="update.emit({text: message})">更新</button>
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {
  @Input() message: string;
  @Output() update = new EventEmitter<{text: string}>();
  
  ngOnInit() {}
}