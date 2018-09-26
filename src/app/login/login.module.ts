import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { ClrFormsModule, ClrFormsNextModule } from '@clr/angular';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ClrFormsModule,
    ClrFormsNextModule,
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
