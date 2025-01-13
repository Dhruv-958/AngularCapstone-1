import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  submitted: boolean = false;
  errorMessage: string = '';
  loginSuccess : boolean = false;

  onSubmit(): void {
    this.submitted = true;
    this.errorMessage = '';

    if (!this.username || !this.password) {
      return;
    }

    if (this.username === 'admin' && this.password === 'admin@123') {
      this.loginSuccess = true;
      this.resetForm();
    } else {
      this.errorMessage = 'Invalid username or password.';
    }
  }

  resetForm(): void {
    this.username = '';
    this.password = '';
    this.submitted = false;
  }
}
