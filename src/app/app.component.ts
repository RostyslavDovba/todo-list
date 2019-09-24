import { Component } from '@angular/core';
import { Task } from './interfaces/Task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  taskId = 0;
  taskList: Task[] = [];

  onAddTask(taskData: Task): void {
    this.taskList.push({
      taskContent: taskData.taskContent,
      taskCategory: taskData.taskCategory,
      taskId: this.taskId
    });
    this.taskId++;
    console.log(this.taskList, '111111111111111');
  }
}
