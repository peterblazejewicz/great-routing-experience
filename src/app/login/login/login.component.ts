import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'gre-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [
    FormsModule,
  ]
})
export class LoginComponent {
  formData = {
    username: '',
    password: '',
    userType: '',
  };
}
