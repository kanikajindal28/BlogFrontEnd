import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from './User';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient ) {}
  private url = 'http://localhost:2019';

  public createUser(user) {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.post<User[]>(this.url + '/addUsers', user);
    }
  public getUser() {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/getuser' , {headers});
  }
 /* public getUserById(id) {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/getUserById/' + id , {headers});
  }*/
  public editUser(user) {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.post(this.url + '/edituser', user, {headers});
  }

  findUser(searchedItem) {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/searchUser/' + searchedItem, {headers});
  }

  public viewUser(id) {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get<User>(this.url + '/viewUser/' + id, {headers});
  }

  getAllUsers(searchUser: any) {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/searchUser/' + searchUser, {headers});
  }
}
