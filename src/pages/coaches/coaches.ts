import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { HttpProvider } from '../../providers/http/http';



/**
 * Generated class for the CoachesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coaches',
  templateUrl: 'coaches.html',
})
export class CoachesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage,public httpProvider:HttpProvider) {
    this.getCoaches()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoachesPage');
  }

  coaches

  getCoaches(){
    this.storage.get('token').then((val) => {
      console.log(val)
      this.httpProvider.getCoaches(val).then(response =>{
        console.log(response);
        this.coaches = response
      }).catch(e =>{
        console.log(e)
      })
      
    }).catch(e =>{
      console.log(e)
    });
  }
  
  addCoach(){
    //this.navCtrl.push()

  }
}
