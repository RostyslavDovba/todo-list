import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @ViewChild('t', {static: true}) taskForm: NgForm;
  @Output() taskCreated = new EventEmitter<{taskContent: string, taskCategory: string}>();
  // newTask = {
  //   task: '',
  //   category: ''
  // };
  constructor() { }

  onSubmit(data) {
    console.log(data);
    this.taskCreated.emit({
      taskContent: data.value.task,
      taskCategory: data.value.category
    });


    // this.newTask = {
    //   task: this.taskForm.value.task,
    //   category: this.taskForm.value.category
    // };
    //
    // console.log(this.newTask, 'aaaaaaaaaaaaaaaaa');
  }

}
