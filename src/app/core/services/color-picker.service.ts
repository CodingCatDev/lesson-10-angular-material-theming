import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OverlayContainer } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root'
})
export class ColorPickerService {
  initialClass = 'angular-material-router-app-theme';
  colorClass$: BehaviorSubject<string> = new BehaviorSubject(this.initialClass);
  constructor(private overlayContainer: OverlayContainer) {
    const storageClass = localStorage.getItem('color-picker');
    console.log(storageClass);
    if (storageClass) {
      overlayContainer.getContainerElement().classList.add(storageClass);
      this.colorClass$.next(storageClass);
    } else {
      overlayContainer.getContainerElement().classList.add(this.initialClass);
    }
  }
  getColorClass() {
    return this.colorClass$;
  }
  setColorClass(className: string) {
    this.overlayContainer.getContainerElement().classList.forEach(css => {
      this.overlayContainer.getContainerElement().classList.remove(css);
    });
    this.overlayContainer.getContainerElement().classList.add(className);
    this.colorClass$.next(className);
    localStorage.setItem('color-picker', className);
  }
}
