import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Alert } from 'src/app/shared/models/alert';
import { Todo } from 'src/app/shared/models/todo';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  alert = {
    title: "New Task",
    description: "Fill the form below to save a new task",
    okBtn: "save",
    cancelBtn: "close",
    hasCancelBtn: true

  } as Alert

  createTask: FormGroup;


  constructor(public dialogRef: MatDialogRef<CreateTodoComponent>,
              public formBuilder: FormBuilder,
              private todoService: TodoService) {

   }

  ngOnInit(): void {
    this.createForm();
  }

  post(): void {
    this.createTask.markAllAsTouched();
    
    if(!this.createTask.invalid) {
      const datas = this.createTask.getRawValue() as Todo;
      
      this.todoService.createTodo(datas).subscribe();

    } 
  }

  private createForm(): void {
    this.createTask = this.formBuilder.group({
      date: [new Date(), Validators.required],
      hour: ["00:00:00", Validators.required],
      title:["", Validators.required, 
                 Validators.minLength(3), 
                 Validators.maxLength(30)
      ],
      description: ["", Validators.maxLength(255)],
      done: [false]
    })
  }

}
