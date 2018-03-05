import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CoachesPage } from '../pages/coaches/coaches'
import { LoginPage } from '../pages/login/login'


import { UserLoginProvider } from '../providers/user-login/user-login';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public UserLoginProvider:UserLoginProvider) {
    platform.ready().then(() => {
      
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.UserLoginProvider.checkUserStatus().then((userPackage) => {
        console.log(userPackage)
        this.loginStatus = userPackage
        if(this.loginStatus.status == true){
          this.rootPage = CoachesPage
        }
        if(this.loginStatus.status == false){
          this.rootPage = LoginPage
        }
      }).catch(e =>{
        console.log(e)
      });
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  loginStatus

  logout(){
    console.log("logout clicked")
  }
}

