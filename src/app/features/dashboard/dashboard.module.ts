import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListService } from './services/list.service';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { ListComponent } from './list/list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LastTodosComponent } from './last-todos/last-todos.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { LayoutModule } from 'src/app/shared/components/layout/layout.module';
import { ExpansionPanelComponent } from 'src/app/shared/components/expansion-panel/expansion-panel.component';



@NgModule({

  declarations: [
    ListComponent,
    ExpansionPanelComponent,
    CreateTodoComponent,
    DashboardComponent,
    LastTodosComponent,
  ],

  imports: [
    FormsModule,
    LayoutModule,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'list',
        component: ListComponent
      }
    ])
  ],

  providers: [ListService]
})
export class DashboardModule { }
