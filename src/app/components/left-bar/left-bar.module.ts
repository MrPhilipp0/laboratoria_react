import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftBarComponent } from './left-bar.component';



@NgModule({
  declarations: [
    LeftBarComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LeftBarComponent,
  ]
})
export class LeftBarModule { }
