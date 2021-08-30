import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.css']
})
export class ExpansionPanelComponent implements OnInit {

  state: boolean = false;
  @Input() task: Todo;

  constructor() { 

  }

  ngOnInit(): void {}

}
