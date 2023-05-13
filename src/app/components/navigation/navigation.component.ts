import { Component } from '@angular/core';
import { ROUTER_CONFIG } from './config/router-config';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  readonly ROUTER_CONFIG = ROUTER_CONFIG;

}
