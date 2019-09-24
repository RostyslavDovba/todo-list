import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../interfaces/Task';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @ViewChild('t', {static: true}) taskForm: NgForm;
  @Output() taskCreated = new EventEmitter<Task>();

  constructor() { }

  onSubmit(data) {
    console.log(data);
    this.taskCreated.emit({
      taskContent: data.value.task,
      taskCategory: data.value.category
    });
    this.taskForm.reset();
  }
}
