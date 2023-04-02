import { LayoutModule } from '../../components/layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { LeftBarModule } from '../../components/left-bar/left-bar.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LeftBarModule,
    LayoutModule,
  ]
})
export class HomeModule { }
