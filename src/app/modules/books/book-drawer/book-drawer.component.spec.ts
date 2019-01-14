import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDrawerComponent } from './book-drawer.component';

describe('BookDrawerComponent', () => {
  let component: BookDrawerComponent;
  let fixture: ComponentFixture<BookDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
