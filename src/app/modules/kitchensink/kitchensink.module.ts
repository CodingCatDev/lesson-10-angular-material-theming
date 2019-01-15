import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KitchensinkRoutingModule } from './kitchensink-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {
  KitchensinkComponent,
  TestEntryComponent
} from './kitchensink.component';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatExpansionModule,
  MatSortModule,
  MatTableModule,
  MatStepperModule
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [KitchensinkComponent, TestEntryComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    KitchensinkRoutingModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatExpansionModule,
    MatSortModule,
    MatTableModule,
    MatStepperModule,

    // CDK Modules
    CdkTableModule,
    DragDropModule
  ],
  entryComponents: [TestEntryComponent]
})
export class KitchensinkModule {}
