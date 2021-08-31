import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfigParams } from 'src/app/shared/models/config-params';
import { Todo } from 'src/app/shared/models/todo';
import { TodoService } from 'src/app/shared/services/todo.service';
import { CreateTodoComponent } from '../create-todo/create-todo.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  tasks: Todo[] = [];
  endList: boolean = false;

  configParams: ConfigParams = {
    page: 0,
    limit: 10

} as ConfigParams;

  constructor(public dialog: MatDialog,
              private todoService: TodoService,
              private _location: Location) {

  }

  ngOnInit(): void {
      this.loadMore()
  }

  back(): void {
    this._location.back();
  }

  deleteTask(id: number): void {
    this.todoService.deleteById(id)
      .subscribe(_ => this.tasks = this.tasks.filter(item => item.id != id));
  }

  loadMore(): void {
    this.configParams.page++;

    this.todoService.getByPage(this.configParams)
        .subscribe(td => {
          if(td.length < this.configParams.limit) {
            this.endList = true;
          } 
          
          this.tasks.push(...td)
      }
    );

  }

  toggleDone(id: number, todo: Todo): void {
    this.todoService.toggleDone(todo, id)
        .subscribe(td => this.tasks = this.tasks.map(item => item.id != td.id? item : td));
  }

  openDialog(): void {
    this.dialog.open(CreateTodoComponent);
  }

}
