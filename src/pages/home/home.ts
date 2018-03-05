import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login'
import { CoachesPage } from '../../pages/coaches/coaches'

import { UserLoginProvider } from '../../providers/user-login/user-login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public UserLoginProvider:UserLoginProvider) {
    this.UserLoginProvider.checkUserStatus().then((userPackage) => {
      console.log(userPackage)
      this.loginStatus = userPackage
      if(this.loginStatus.status == true){
        this.navCtrl.push(CoachesPage,{token:this.loginStatus.token})
      }
      if(this.loginStatus.status == false){
        this.navCtrl.push(LoginPage)
      }
    }).catch(e =>{
      console.log(e)
    });

    
    
  }

  loginStatus

  loginPage(){

    this.navCtrl.push(LoginPage)
  }

}
