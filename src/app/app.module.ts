import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftBarModule } from './components/left-bar/left-bar.module';
import { UserSettingsModule } from './components/user-settings/user-settings.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeftBarModule,
    UserSettingsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
