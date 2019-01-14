import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDrawerComponent } from './book-drawer.component';

@NgModule({
  declarations: [BookDrawerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BookDrawerComponent
  ]
})
export class BookDrawerModule { }
