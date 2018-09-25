import { Component } from '@angular/core';

@Component({
  selector: 'gre-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  formData = {
    username: '',
    password: '',
    userType: '',
  };
  title = 'GreatRoutingExperience';
}
