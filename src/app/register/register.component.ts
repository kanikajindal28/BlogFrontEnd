import { Component, OnInit } from '@angular/core';
import {RegistrationService} from '../registration.service';
import {Router} from '@angular/router';
import {User} from '../User';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private httpClientService: RegistrationService, private router: Router) { }
  private emailref = new FormControl('',[
    Validators.required,
    Validators.email
  ]);
  private mobNumberPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  // tslint:disable-next-line:new-parens
  private user: User = new class implements User {
    active: boolean;
    email: string;
    gender: string;
    id: number;
    mobileNo: number;
    name: string;
    password: string;
    role: string;
  };

  ngOnInit() {
  }
  createUser() {
    if (this.user.name != null || this.user.email != null || this.user.mobileNo != null || this.user.password != null) {
      this.httpClientService.createUser(this.user)
        .subscribe(data => {
          alert('User created successfully.');
          this.router.navigate(['login']);
        });
    } else {
      alert('Please fill all the details');
    }
  }
}
