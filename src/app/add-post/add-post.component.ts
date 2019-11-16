import { Component, OnInit } from '@angular/core';
import {User} from '../User';
import {Blog} from '../Blog';
import {BlogService} from "../blog.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  // tslint:disable-next-line:new-parens
  private blog: Blog = new class implements Blog {
    postId: number;
    date: Date;
    title: string;
    content: string;
    userId: User;
    private: boolean;
  }
constructor(private blogservice: BlogService, private router: Router) { }

  ngOnInit() {
  }


  addBlog() {
    if (this.blog.title != null && this.blog.content != null) {
      if (this.blog != null) {
        this.blog.date = new Date();
        this.blogservice.addBlog(this.blog).subscribe((data) => {
          alert('Blog added successfully');
          this.router.navigate(['feed']);
        });
      }
    } else {
      alert('Please fill the title and the content');
    }
  }
}
