import { Component, OnInit } from '@angular/core';
import {RegistrationService} from '../registration.service';
import {BlogService} from '../blog.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private rService: RegistrationService, private blogService: BlogService, private router: Router) { }
  private user;
  private blogs;
  private blogslength;
  ngOnInit() {
    this.rService.getUser().subscribe(data => {
      this.user = data;
      this.blogService.viewPost(this.user.userId).subscribe(data2 => {
        this.blogs = data2;
        this.blogslength =  this.blogs.length;
      });
    });
  }
  editBlog(postId: any) {
    this.router.navigate(['editPost', postId]);
  }
  deleteBlog(id: any) {
    if (confirm('Are you sure to delete blog?')) {
      this.blogService.deleteParticularBlog(id).subscribe(data => {
        this.blogs = data;
        alert('Blog deleted successfully.');
        this.router.navigate(['feed']);
      });
    } else {
      this.router.navigate(['feed']);
    }
  }
  makePrivate(id) {
    this.blogService.makeBlogPrivate(id).subscribe(data => {
      this.blogs = data;
      alert('Blog made private.');
      this.router.navigate(['feed']);
    });
  }

  makePublic(id) {
    this.blogService.makeBlogPublic(id).subscribe(data => {
      this.blogs = data;
      alert('Blog made public.');
      this.router.navigate(['feed']);
    });
  }
  seeFollowers() {
    this.router.navigate(['connections/followers']);
  }

  seeFollowing() {
    this.router.navigate(['connections/following']);
  }

  }
