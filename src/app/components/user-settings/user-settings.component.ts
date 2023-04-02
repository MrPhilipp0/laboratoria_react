import { ColorMode } from './types/color-mode.type';
import { FontSize } from './types/font-size.type';
import { UserSettingsService } from './services/user-settings.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {
  
  fontSize$!: Observable<FontSize>;
  colorMode$!: Observable<ColorMode>;

  constructor(
    private userSettingsService: UserSettingsService,
  ) {}

  ngOnInit(): void {
    this.fontSize$ = this.userSettingsService.getFontSize();
    this.colorMode$ = this.userSettingsService.getColorMode();
  }

  setFontSize(newFontSize: FontSize): void {
    this.userSettingsService.setFontSize(newFontSize);
  }

  setColorMode(newMode: ColorMode): void {
    this.userSettingsService.setColorMode(newMode);
  }
}
