import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private email: '';
  private password: '';
  private invalidLogin = false;

  constructor(private loginservice: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

    checkLogin() {
      this.loginservice.authenticate(this.email, this.password).subscribe(data => {
          this.router.navigate(['feed']);
          this.invalidLogin = false;
        },
        error => {
          this.invalidLogin = true;
          alert('Please enter valid email or password');
        });
      }
}
