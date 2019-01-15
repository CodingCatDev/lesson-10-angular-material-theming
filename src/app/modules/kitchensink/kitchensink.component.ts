import { Component, OnInit, ElementRef } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { Observable, of } from 'rxjs';
import { MatSnackBar, MatDialog, MatBottomSheet } from '@angular/material';
import { ViewportRuler } from '@angular/cdk/overlay';
import { FocusMonitor } from '@angular/cdk/a11y';
import { FormControl } from '@angular/forms';

@Component({
  template: `
    <button mat-raised-button color="primary">Do the thing</button>
  `
})
export class TestEntryComponent {}

@Component({
  selector: 'app-kitchensink',
  templateUrl: './kitchensink.component.html',
  styleUrls: ['./kitchensink.component.scss']
})
export class KitchensinkComponent implements OnInit {
  /** List of columns for the CDK and Material table. */
  tableColumns = ['userId'];

  /** Data source for the CDK and Material table. */
  tableDataSource = new TableDataSource();

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  constructor(
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private viewportRuler: ViewportRuler,
    private focusMonitor: FocusMonitor,
    private elementRef: ElementRef<HTMLElement>,
    private bottomSheet: MatBottomSheet
  ) {
    focusMonitor.focusVia(elementRef, 'program');
    snackBar.open('Hello there', '', { duration: 3000 });

    // Do a sanity check on the viewport ruler.
    viewportRuler.getViewportRect();
    viewportRuler.getViewportSize();
    viewportRuler.getViewportScrollPosition();
  }

  ngOnInit() {}
  openDialog() {
    this.dialog.open(TestEntryComponent);
  }
  openBottomSheet() {
    this.bottomSheet.open(TestEntryComponent);
  }
}

export class TableDataSource extends DataSource<any> {
  connect(): Observable<any> {
    return of([{ userId: 1 }, { userId: 2 }]);
  }

  disconnect() {}
}
