import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupTimeComponent } from './pickup-time.component';

describe('PickupTimeComponent', () => {
  let component: PickupTimeComponent;
  let fixture: ComponentFixture<PickupTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickupTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickupTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
