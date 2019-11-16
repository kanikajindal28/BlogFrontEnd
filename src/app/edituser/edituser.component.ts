import { Component, OnInit } from '@angular/core';
import {RegistrationService} from "../registration.service";

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit {

  constructor(private rService: RegistrationService) { }
  private user;
  ngOnInit() {
    this.rService.getUser().subscribe(data => {
        this.user = data;
      });
  }
  editDetails() {
  this.rService.editUser(this.user).subscribe((data) => {
    alert('User Updated Successfully!!');
  });
}
}
