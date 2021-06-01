import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componants/header/header.component';
import { HomeComponent } from './componants/home/home.component';
import { ProfileComponent } from './componants/profile/profile.component';
import { SocialComponent } from './componants/social/social.component';
import {RouterModule, Routes} from "@angular/router";
const routes: Routes = [
  {path : '' , component: HomeComponent},
  {path: 'login', component: SocialComponent},
  {path: 'home', component: HomeComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '**', redirectTo: '/home'}
]

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    SocialComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
      RouterModule.forRoot(routes),
      SocialLoginModule
    ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '369327669743-5pk50jluvev72o6e2u76tj0k6fhm41rq.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('195140039141564')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
