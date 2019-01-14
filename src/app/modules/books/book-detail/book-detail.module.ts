import { BookDrawerModule } from './../book-drawer/book-drawer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookDetailRoutingModule } from './book-detail-routing.module';
import { BookDetailComponent } from './book-detail.component';

@NgModule({
  declarations: [BookDetailComponent],
  imports: [
    CommonModule,
    BookDetailRoutingModule,
    BookDrawerModule
  ]
})
export class BookDetailModule { }
