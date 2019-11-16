import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FeedComponent } from './feed/feed.component';
import { ProfileComponent } from './profile/profile.component';
import { AddPostComponent } from './add-post/add-post.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
import { EditpostComponent } from './editpost/editpost.component';
import { EdituserComponent } from './edituser/edituser.component';
import { FollowingComponent } from './following/following.component';
import { FollowersComponent } from './followers/followers.component';
import { BlogComponent } from './blog/blog.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { ConnectionsComponent } from './connections/connections.component';
import { SelectFollowersComponent } from './select-followers/select-followers.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    FeedComponent,
    ProfileComponent,
    AddPostComponent,
    LoginComponent,
    PageNotFoundComponent,
    LogoutComponent,
    EditpostComponent,
    EdituserComponent,
    FollowingComponent,
    FollowersComponent,
    BlogComponent,
    ViewprofileComponent,
    ConnectionsComponent,
    SelectFollowersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
