import { Injectable } from '@angular/core';
import {Blog} from './Blog';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient ) {}
  private url = 'http://localhost:2019';

  public addBlog(blog) {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.post<Blog[]>(this.url + '/addBlog', blog,  {headers});
  }
  public getAllBlogs() {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get<Blog[]>(this.url + '/blogs', {headers});
  }

  public getCurrentBlog(id) {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/getBlog/' + id, {headers});
  }


  editBlog(currentBlog) {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.post(this.url + '/editBlog/' , currentBlog, {headers});
  }

  getSearchedResult(searchedItem: string) {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/search/' + searchedItem, {headers});
  }

  viewPost(id) {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/viewBlogs/' + id, {headers});
  }

  makeBlogPrivate(id) {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/makePrivate/' + id, {headers});
  }
  deleteParticularBlog(id) {
      const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
      return this.http.get(this.url + '/deleteBlog/' + id, {headers});
    }

  getThisBlog(id) {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/getBlog/' + id, {headers});
  }

  makeBlogPublic(id) {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/makePublic/' + id, {headers});
  }
}
