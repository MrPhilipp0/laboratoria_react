import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content.component';
import { MainContentRoutingModule } from './main-content-routing.module';
import { NavigationModule } from 'src/app/components/navigation/navigation.module';



@NgModule({
  declarations: [
    MainContentComponent,
  ],
  imports: [
    CommonModule,
    MainContentRoutingModule,
    NavigationModule,
  ],
  exports: [
    MainContentComponent,
  ]
})
export class MainContentModule { }
