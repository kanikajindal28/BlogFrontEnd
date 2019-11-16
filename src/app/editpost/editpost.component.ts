import { Component, OnInit } from '@angular/core';
import {Blog} from '../Blog';
import {BlogService} from '../blog.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.scss']
})
export class EditpostComponent implements OnInit {

  private currentBlog;
  private blogId;
  constructor( private blogService: BlogService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      // tslint:disable-next-line:radix
      const id = parseInt(params.get('id'));
      this.blogId = id;
    })
    this.blogService.getCurrentBlog(this.blogId).subscribe((data) => {
      this.currentBlog = data;
    });
  }

  editBlog(currentBlog) {
    this.blogService.editBlog(currentBlog).subscribe((data) => {
      alert('edited successfully');
      this.router.navigate(['feed']);
    });
  }
}

