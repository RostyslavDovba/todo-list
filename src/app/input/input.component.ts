import { Component, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @ViewChild('t', {static: true}) taskForm: NgForm;

  constructor() { }

  // onSubmit(taskInput: NgForm) {
  //   console.log(taskInput.value);
  // }
  onSubmit() {
    console.log(this.taskForm);
  }

}
