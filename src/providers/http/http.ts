import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Http} from '@angular/http';
import 'rxjs/add/operator/map'


/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

  constructor(public http: HttpClient) {
    console.log('Hello HttpProvider Provider');
  }

  login(username,password){
   return new Promise(resolve => {
   this.http.post(
     "https://haunted-crypt-78964.herokuapp.com/login",
     {email:username,password:password})
     .subscribe(data => {
       console.log(data);
       resolve(data);
      }, err => {
        console.log(err);
        
      });
    });
  }

  
  getCoaches(token){
    console.log('i am here')
    console.log(token)
    return new Promise(resolve => {
    this.http.get(
      "https://haunted-crypt-78964.herokuapp.com/loggedInCoach",
      {headers: {'Authorization':'Bearer ' + token} }
    )
      .subscribe(data => {
        console.log(data);
        resolve(data);
       }, err => {
         console.log(err);
         
       });
  });
 }


}
