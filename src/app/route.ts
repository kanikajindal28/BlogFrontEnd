import {Routes} from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import {FeedComponent} from './feed/feed.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {LoginComponent} from './login/login.component';
import {AddPostComponent} from './add-post/add-post.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthguardService} from './authguard.service';
import {EditpostComponent} from './editpost/editpost.component';
import {EdituserComponent} from './edituser/edituser.component';
import {FollowersComponent} from './followers/followers.component';
import {FollowingComponent} from './following/following.component';
import {ViewprofileComponent} from './viewprofile/viewprofile.component';
import {ConnectionsComponent} from './connections/connections.component';
import {SelectFollowersComponent} from './select-followers/select-followers.component';
import {BlogComponent} from './blog/blog.component';

export const MAIN_ROUTES: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login' },
  {path: 'register', component: RegisterComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'feed', component: FeedComponent , canActivate: [AuthguardService]},
  {path: 'login', component: LoginComponent},
  {path: 'addPost', component: AddPostComponent, canActivate: [AuthguardService]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthguardService]},
  { path : 'viewPost/:id', component: BlogComponent, canActivate: [AuthguardService] },
  {path: 'edituser', component: EdituserComponent, canActivate: [AuthguardService]},
  {path: 'editPost/:id', component: EditpostComponent, canActivate: [AuthguardService]},
  {path: 'viewProfile/:id', component: ViewprofileComponent, canActivate: [AuthguardService]},
  { path : 'connections',
    component: ConnectionsComponent,
    children: [
      { path: 'followers', component: FollowersComponent, canActivate: [AuthguardService] },
      { path: 'following', component: FollowingComponent, canActivate: [AuthguardService] }
    ],
    canActivate: [AuthguardService]},
  { path : 'selectFollowers', component: SelectFollowersComponent, canActivate: [AuthguardService] },
  {path: '*', component: PageNotFoundComponent}
];
