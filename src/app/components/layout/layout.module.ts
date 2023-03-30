import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { SearchComponent } from './components/search/search.component';
import { SalesComponent } from './components/sales/sales.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { SppedComponent } from './components/speed/speed.component';
import { EnergyComponent } from './components/energy/energy.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { MusicComponent } from './components/music/music.component';
import { BannerComponent } from './components/banner/banner.component';



@NgModule({
  declarations: [
    LayoutComponent,
    SearchComponent,
    SalesComponent,
    WatchlistComponent,
    SppedComponent,
    EnergyComponent,
    NewsletterComponent,
    MusicComponent,
    BannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LayoutComponent,
  ]
})
export class LayoutModule { }
