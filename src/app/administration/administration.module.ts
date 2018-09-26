import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdminListComponent } from './admin-list/admin-list.component';

@NgModule({
  imports: [
    CommonModule,
    AdministrationRoutingModule
  ],
  declarations: [AdminListComponent]
})
export class AdministrationModule { }
