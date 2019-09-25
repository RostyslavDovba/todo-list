import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../interfaces/Task';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() task: Task;
  @Output() taskDeleted = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  deleteTask() {
    this.taskDeleted.emit(this.task.taskId);
    console.log('table id: ', this.task.taskId);
  }

}
