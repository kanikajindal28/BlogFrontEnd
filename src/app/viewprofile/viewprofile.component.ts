import { Component, OnInit } from '@angular/core';
import {RegistrationService} from '../registration.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {BlogService} from '../blog.service';
import {FollowerFollowingService} from '../follower-following.service';



@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.scss']
})
export class ViewprofileComponent implements OnInit {
  private userId;
  private viewBlogs;
  private viewUser;
  private isFollowing = false;
  private user;
  private role;
  private length;

  constructor(private route: ActivatedRoute, private registrationService: RegistrationService,
              private blogService: BlogService, private ffService: FollowerFollowingService, private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      // tslint:disable-next-line:radix
      const id = parseInt(params.get('id'));
      this.userId = id;
    });
    this.registrationService.viewUser(this.userId).subscribe(data => this.viewUser = data);
    this.blogService.viewPost(this.userId).subscribe(data => this.viewBlogs = data);
    this.ffService.checkIfCurrentUserIsFollower(this.userId).subscribe(data => {
      // tslint:disable-next-line:triple-equals
      if (data === 'true') {
        this.isFollowing = true;
      }
      this.length = this.viewBlogs.length;
    });
    this.registrationService.getUser().subscribe(data => {
      this.user = data;
      this.role = this.user.role;
    });
  }

  editBlog(postId: any) {
    this.router.navigate(['editPost', postId]);
  }

  deleteBlog(id: any) {
    this.blogService.deleteParticularBlog(id).subscribe(data => {
      alert('Blog deleted successfully.');
      this.router.navigate(['feed']);
    });
  }

  followUser() {
    this.ffService.followThisUser(this.userId).subscribe(data => {
      this.isFollowing = true;
      alert('followed');
    });
  }

  unfollowUser() {
    this.ffService.unfollowThisUser(this.userId).subscribe(data => {
      this.isFollowing = false;
    });
  }

  makePrivate(id) {
    this.blogService.makeBlogPrivate(id).subscribe(data => {
      this.viewBlogs = data;
      alert('Blog made private.');
    });
  }

  makePublic(id) {
    this.blogService.makeBlogPublic(id).subscribe(data => {
      this.viewBlogs = data;
      alert('Blog made public.');
    });
  }
}
