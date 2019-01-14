import { BookDrawerComponent } from './../book-drawer/book-drawer.component';
import { BookDetailComponent } from './book-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BookDetailComponent
  },
  {
    path: '',
    component: BookDrawerComponent,
    outlet: 'book-drawer'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookDetailRoutingModule { }
