import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpProvider } from '../../providers/http/http';
import { UserLoginProvider } from '../../providers/user-login/user-login';

import { CoachesPage } from '../../pages/coaches/coaches'


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpProvider:HttpProvider,public UserLoginProvider:UserLoginProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  username 

  password

  login(){
    this.httpProvider.login(this.username,this.password).then(response =>{
      console.log(response);
      this.UserLoginProvider.saveUser(response)
      this.navCtrl.setRoot(CoachesPage)
    }).catch(e =>{
      console.log(e)
    })
  }

}
