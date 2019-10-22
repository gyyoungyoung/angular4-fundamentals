import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
    <input #myInput type="text" (keydown.enter)="onEnter($event, myInput.value)">
     <button (click)="onClick($event, myInput.value)">点击</button>
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {
  onClick(event, value) {
    console.log(event);
    console.log(value);
  }
  
  onEnter(event, value) {
    console.log(event);
    console.log(value);
  }
  
  ngOnInit() {}
}