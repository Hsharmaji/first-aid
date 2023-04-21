import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  users: any[] = [{
    username: 'admin',
    password: 'admin'
  }];
  username: string = '';
  password: string = '';
  login_done: boolean = false;
  signin_done: boolean = false;
  login_error: boolean = false;

  constructor(private router: Router) {}

  login() {
    // Check if the user exists in the list
    const user = this.users.find(u => u.username === this.username && u.password === this.password);
    if (user) {
      this.login_done=true;
      this.login_error=false;
      this.signin_done=false;
      setTimeout( () => {      
         this.router.navigate(['/details']);
    }, 100 );
    } else {
      this.login_error=true;
    }
  }

  signup() {
    // Check if username and password are empty
    if (!this.username || !this.password) {
      // Set error flag and return without adding user to the list
      this.login_error = true;
      return;
    }
    
    // Add the new user to the list
    this.users.push({
      username: this.username,
      password: this.password
    });
    
    // Reset form values and flags
    this.login_error = false;
    this.signin_done = true;
    this.username = '';
    this.password = '';
    

  }
  
}