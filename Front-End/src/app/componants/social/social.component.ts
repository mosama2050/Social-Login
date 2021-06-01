import { Component, OnInit } from '@angular/core';
import {FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser} from "angularx-social-login";
import {Router} from "@angular/router";

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {


  constructor(private authService: SocialAuthService,
              private router: Router) { }
  // @ts-ignore
  user: SocialUser;
  isLogin: boolean = false; // false
  ngOnInit(): void {
    this.authService.authState.subscribe(
      data => {
        this.isLogin = (data != null);
      }
    );
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      data => {
        this.user = data;
        console.log(data)
      }
    );
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      data => {
        this.user = data;
        console.log(data)
      }
    );
  }


  signOut(): void {
    this.authService.signOut();
    console.log("signOut");
    this.router.navigateByUrl("/home");
  }
}
