import { ColorPickerService } from './core/services/color-picker.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-material-router-outlet';
  themeClass;
  constructor(private colorPicker: ColorPickerService) {
    this.themeClass = this.colorPicker.getColorClass();
  }
  ngOnInit(): void {}
}
