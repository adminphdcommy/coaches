import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCoachesPage } from './add-coaches';

@NgModule({
  declarations: [
    AddCoachesPage,
  ],
  imports: [
    IonicPageModule.forChild(AddCoachesPage),
  ],
})
export class AddCoachesPageModule {}
