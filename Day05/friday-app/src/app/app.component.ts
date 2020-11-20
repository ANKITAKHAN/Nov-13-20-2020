import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  userName: string = '';
  password: string = '';
  message = '';
  isLoginValid = false;

  onLoginButtonClicked() {
    if (this.userName === 'admin' && this.password === 'admin') {
      this.message = 'Logging in...';
      this.isLoginValid = true;
    } else {
      this.message = 'Incorrect username or password';
      
    }

  }

  title = 'friday-app';
  now = new Date().toLocaleTimeString();
  
  name: string;
  onGetTimeClicked() {
    this.now = new Date().toLocaleTimeString();
  }

  onNameChanged(e) {
    this.name = e.target.value;
  }

  onButtonClicked() {
    this.message = `Hi ${this.name}`;
  }
}
