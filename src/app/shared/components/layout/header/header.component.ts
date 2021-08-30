import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CreateTodoComponent } from 'src/app/features/dashboard/create-todo/create-todo.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title: string;

  constructor(public dialog: MatDialog,
              private router: Router) { }

  ngOnInit(): void {

  }

  redirectTo(path: string): void {
    this.router.navigateByUrl(path);
  }

  openDialog(): void {
    this.dialog.open(CreateTodoComponent);
  }

}
