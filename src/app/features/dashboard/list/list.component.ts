import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  task = {
    id: 1,
    date: new Date(),
    hour: "10:00:00",
    title: "Something TODO",
    description: "It's very Important!I have something very important to do. It is something really really important",
    done: true

  } as Todo;

  task1 = {
    id: 1,
    date: new Date(),
    hour: "10:00:00",
    title: "Something TODO 2",
    description: "It's very Important!",
    done: false

  } as Todo

  constructor(private _location: Location) { }

  ngOnInit(): void {
  }

  back(): void {
    this._location.back();
  }

}
