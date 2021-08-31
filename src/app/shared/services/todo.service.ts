import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Todo } from '../models/todo';
import { ConfigParams } from '../models/config-params';
import { ConfigParamsService } from './config-params.service';


const baseURL = "http://localhost:3000/todos"

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient,
              private config: ConfigParamsService) { 

  }

  getByPage(params: ConfigParams): Observable<Todo[]> {
      const httpParams = this.config.setupParams(params);

      return this.httpClient.get<Todo[]>(baseURL, {params: httpParams});
  }

  getById(id: number): Observable<Todo> {
    return this.httpClient.get<Todo>(`${baseURL}/${id}`);
  }

  createTodo(todo: Todo): Observable<Todo> {
      return this.httpClient.post<Todo>(baseURL, todo);
  }

  updateTodo(todo: Todo, id: number): Observable<Todo> {
      return this.httpClient.put<Todo>(`${baseURL}/${id}`, todo);
  }

  deleteById(id: number): Observable<void> {
      return this.httpClient.delete<void>(`${baseURL}/${id}`);
  }

  toggleDone(todo: Todo, id: number): Observable<Todo> {
    const toggled = {...todo, done: !todo.done};

    return this.httpClient.patch<Todo>(`${baseURL}/${id}`, toggled);
  }

}
