import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatMenuModule,
  MatGridListModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
  declarations: [SidenavComponent],
  imports: [
    CommonModule,
    FlexModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatListModule,
    MatMenuModule,
    MatGridListModule
  ],
  exports: [SidenavComponent]
})
export class SidenavModule {}
