import { Component, OnInit } from '@angular/core';

import { Todo } from 'src/app/shared/models/todo';
import { TodoService } from 'src/app/shared/services/todo.service';
import { ConfigParams } from 'src/app/shared/models/config-params';
import { MatDialog } from '@angular/material/dialog';
import { CreateTodoComponent } from '../create-todo/create-todo.component';


@Component({
  selector: 'app-last-todos',
  templateUrl: './last-todos.component.html',
  styleUrls: ['./last-todos.component.css']
})
export class LastTodosComponent implements OnInit {

  tasks: Todo[] = []; 

  configParams: ConfigParams = {
    page: 0,
    limit: 10

} as ConfigParams;

  constructor(public dialog: MatDialog,
              private todoService: TodoService) { 

  }

  ngOnInit(): void {
    this.todoService.getByPage(this.configParams).subscribe((td: Todo[]) => {
        this.tasks = td;
    });
  }

  toggleDone(id: number, todo: Todo) {
      this.todoService.toggleDone(todo, id)
        .subscribe(td => this.tasks = this.tasks.map(item => item.id != td.id? item : td));
  }

  openDialog(): void {
    this.dialog.open(CreateTodoComponent);
  }
}
