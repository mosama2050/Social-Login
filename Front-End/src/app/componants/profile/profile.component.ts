import { Component, OnInit } from '@angular/core';
import {SocialAuthService, SocialUser} from "angularx-social-login";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private auth: SocialAuthService) { }
  // @ts-ignore
  user: SocialUser;
  // @ts-ignore
  isLogin: boolean; // false
  ngOnInit(): void {
    this.auth.authState.subscribe(
      data => {
        this.isLogin = (data != null);
        this.user = data;
      }
    );
  }

}
