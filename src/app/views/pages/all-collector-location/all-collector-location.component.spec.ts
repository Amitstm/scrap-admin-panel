import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCollectorLocationComponent } from './all-collector-location.component';

describe('AllCollectorLocationComponent', () => {
  let component: AllCollectorLocationComponent;
  let fixture: ComponentFixture<AllCollectorLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCollectorLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCollectorLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
