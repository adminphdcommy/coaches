import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';


/*
  Generated class for the UserLoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserLoginProvider {

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello UserLoginProvider Provider');
    

  }

  token 

  saveUser(token){
    this.storage.set('token', token.token);
    console.log("successfully set token")
    this.checkUserStatus()
  }

  userPackage

  checkUserStatus(){
    return new Promise(resolve => {
      this.storage.get('token').then((val) => {
        if(!val){
          this.userPackage = {status:false}
          resolve(this.userPackage)
        }
        else{
          this.userPackage = {status:true,token:val}
          resolve(this.userPackage)
        }
        
      }).catch(e =>{
        console.log(e)
      });
    })
    
    
  
  }
}
