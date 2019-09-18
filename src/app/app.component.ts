import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';
  taskList = [{taskName: 'Test', taskCategory: 'date'}];

  onAddTask(taskData: {taskContent: string, taskCategory: string}) {
    this.taskList.push({
      taskName: taskData.taskContent,
      taskCategory: taskData.taskCategory
    });
  }
}
