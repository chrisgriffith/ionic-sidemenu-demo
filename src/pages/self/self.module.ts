import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelfPage } from './self';

@NgModule({
  declarations: [
    SelfPage,
  ],
  imports: [
    IonicPageModule.forChild(SelfPage),
  ],
})
export class SelfPageModule {}
