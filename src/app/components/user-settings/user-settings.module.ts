import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSettingsComponent } from './user-settings.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UserSettingsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    UserSettingsComponent,
  ]
})
export class UserSettingsModule { }
