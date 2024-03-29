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

  onSubmit(formData) {
    this.taskCreated.emit({
      taskContent: formData.value.task,
      taskCategory: formData.value.category
    });
    this.taskForm.reset();
  }
}
