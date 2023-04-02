import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserSettingsService } from 'src/app/components/user-settings/services/user-settings.service';
import { ColorMode } from 'src/app/components/user-settings/types/color-mode.type';
import { FontSize } from 'src/app/components/user-settings/types/font-size.type';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {

  fontSize$!: Observable<FontSize>;
  colorMode$!: Observable<ColorMode>;

  constructor(
    private userSettingsService: UserSettingsService,
  ) { }

  ngOnInit(): void {
    this.fontSize$ = this.userSettingsService.getFontSize();
    this.colorMode$ = this.userSettingsService.getColorMode();
  }

}
