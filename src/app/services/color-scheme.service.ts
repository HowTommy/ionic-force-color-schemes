import { Inject, Injectable, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ColorSchemeService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  getColorScheme(): string {
    return localStorage.getItem('colorScheme') ?? 'auto';
  }

  setColorScheme(newColorScheme: string): void {
    localStorage.setItem('colorScheme', newColorScheme);
    this.loadStoredTheme();
  }

  loadStoredTheme(): void {
    const colorScheme = localStorage.getItem('colorScheme');
    if (!colorScheme) {
        return;
    }
    this.document.body.classList.remove('auto');
    this.document.body.classList.remove('dark');
    this.document.body.classList.remove('light');
    this.document.body.classList.add(colorScheme);
  }
}
