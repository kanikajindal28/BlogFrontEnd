import { Component, OnInit } from '@angular/core';
import {BlogService} from '../blog.service';
import {RegistrationService} from '../registration.service';
import {Router} from '@angular/router';
import {FollowerFollowingService} from "../follower-following.service";
import {CommentService} from "../comment.service";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  private blogs;
  private user;
  private searchUser: string;
  private allUsers;
  private followings;
  private userComment;
  // tslint:disable-next-line:max-line-length
  constructor(private blogService: BlogService, private commentService: CommentService, private userService: RegistrationService, private router: Router, private ffService: FollowerFollowingService) {
  }

  ngOnInit() {
    this.blogService.getAllBlogs().subscribe((data) => {
      this.blogs = data;
    });
    this.userService.getUser().subscribe((data) => {
        this.user = data;
      });
    this.ffService.getFollowings().subscribe(data => {
      console.log(data);
      this.followings = data;
    });
  }

  editBlog(postId: any) {
    this.router.navigate(['editPost', postId]);
  }

  searchByUser() {
    // tslint:disable-next-line:triple-equals
    if (this.searchUser != undefined && this.searchUser != '') {
    this.userService.getAllUsers(this.searchUser).subscribe((data) => {
      this.allUsers = data;
    });
    } else {
      this.searchUser = null;
    }
  }
  makePrivate(id) {
    this.blogService.makeBlogPrivate(id).subscribe(data => {
      this.blogs = data;
      alert('Blog made private.');
    });
  }
  makePublic(id) {
    this.blogService.makeBlogPublic(id).subscribe(data => {
      this.blogs = data;
      alert('Blog made public.');
    });
  }

  viewProfile(id) {
    this.router.navigate(['viewProfile', id]);
  }

  deleteBlog(id: any) {
    if (confirm('Are you sure to delete blog?')) {
      this.blogService.deleteParticularBlog(id).subscribe(data => {
        alert('Blog deleted successfully.');
        this.blogs = data;
        this.router.navigate(['feed']);
      });
    } else {
      this.router.navigate(['feed']);
    }
  }

  checkFollowing(id) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.followings.length; i++) {
      // tslint:disable-next-line:triple-equals
      if (id == this.followings[i].following.userId) {
        return true;
      }
    }
    return false;
  }

  postComment(commentt, blog) {
    console.log(commentt);
    // tslint:disable-next-line:triple-equals
    if (commentt != null && commentt != '') {
      this.userComment.comment = commentt;
      this.userComment.date = new Date();
      this.userComment.blog = blog;
      console.log(this.userComment);
      this.commentService.addComment(this.userComment).subscribe(data => {
        alert('New Comment Added Successfully');
        this.router.navigate(['viewPost', blog.postId]);
      });
    } else {
      alert('Please add a valid comment.');
    }

  }

  viewPost(postId) {
    this.router.navigate(['viewPost', postId]);
  }
  seeFollowers() {
    this.router.navigate(['connections/followers']);
  }

  seeFollowing() {
    this.router.navigate(['connections/following']);
  }
  selectFollowers() {
    this.router.navigate(['selectFollowers']);
  }
}
