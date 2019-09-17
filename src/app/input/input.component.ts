import { Component, Output, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @ViewChild('t', {static: true}) taskForm: NgForm;
  newTask = {
    task: '',
    category: ''
  };
  constructor() { }

  // onSubmit(taskInput: NgForm) {
  //   console.log(taskInput.value);
  // }
  onSubmit() {
    console.log(this.taskForm);
    this.newTask.task = this.taskForm.value.task;
    this.newTask.category = this.taskForm.value.category;

    console.log(this.newTask);
  }

}
