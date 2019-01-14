import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavBooksComponent } from './sidenav-books.component';

describe('SidenavBooksComponent', () => {
  let component: SidenavBooksComponent;
  let fixture: ComponentFixture<SidenavBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
