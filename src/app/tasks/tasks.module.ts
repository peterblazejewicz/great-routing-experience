import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksListComponent } from './tasks-list/tasks-list.component';

@NgModule({
  imports: [CommonModule, TasksRoutingModule],
  declarations: [TasksListComponent],
})
export class TasksModule {}
