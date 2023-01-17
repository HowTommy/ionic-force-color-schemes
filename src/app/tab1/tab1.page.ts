import { Component } from '@angular/core';
import { ColorSchemeService } from '../services/color-scheme.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  colorScheme: string;

  constructor(private readonly colorSchemeService: ColorSchemeService) {
    this.colorScheme = this.colorSchemeService.getColorScheme();
  }

  colorSchemeChanged() {
    this.colorSchemeService.setColorScheme(this.colorScheme);
  }
}
