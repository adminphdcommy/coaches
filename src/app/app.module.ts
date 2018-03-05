import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CoachesProvider } from '../providers/coaches/coaches';
import { LoginPage } from '../pages/login/login';
import { CoachesPage } from '../pages/coaches/coaches';
import { AddCoachesPage } from '../pages/add-coaches/add-coaches';

import { HttpProvider } from '../providers/http/http';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { UserLoginProvider } from '../providers/user-login/user-login';

import { IonicStorageModule } from '@ionic/storage';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CoachesPage,
    AddCoachesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    CoachesPage,
    AddCoachesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CoachesProvider,
    HttpProvider,
    UserLoginProvider
  ]
})
export class AppModule {}
