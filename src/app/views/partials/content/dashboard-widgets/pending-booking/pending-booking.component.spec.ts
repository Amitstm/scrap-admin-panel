import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingBookingComponent } from './pending-booking.component';

describe('PendingBookingComponent', () => {
  let component: PendingBookingComponent;
  let fixture: ComponentFixture<PendingBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
