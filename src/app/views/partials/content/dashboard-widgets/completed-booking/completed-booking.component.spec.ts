import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedBookingComponent } from './completed-booking.component';

describe('CompletedBookingComponent', () => {
  let component: CompletedBookingComponent;
  let fixture: ComponentFixture<CompletedBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
