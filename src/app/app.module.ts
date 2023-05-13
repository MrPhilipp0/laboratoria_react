import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftBarModule } from './components/left-bar/left-bar.module';
import { UserSettingsModule } from './components/user-settings/user-settings.module';
import { NavigationModule } from './components/navigation/navigation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeftBarModule,
    NavigationModule,
    UserSettingsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
