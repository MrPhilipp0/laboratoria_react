import { FontSize } from './../types/font-size.type';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ColorMode } from '../types/color-mode.type';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {

  private fontSize$ = new BehaviorSubject<FontSize>('medium');
  private colorMode$ = new BehaviorSubject<ColorMode>('light');

  setFontSize(font: FontSize): void {
    this.fontSize$.next(font);
  }

  getFontSize(): Observable<FontSize> {
    return this.fontSize$.asObservable();
  }

  setColorMode(mode: ColorMode): void {
    mode === 'light' && document.body.classList.remove('night')
    mode === 'night' && document.body.classList.add('night')
    this.colorMode$.next(mode);
  }

  getColorMode(): Observable<ColorMode> {
    return this.colorMode$.asObservable();
  }
}
