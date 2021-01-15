import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCollectorComponent } from './total-collector.component';

describe('TotalCollectorComponent', () => {
  let component: TotalCollectorComponent;
  let fixture: ComponentFixture<TotalCollectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalCollectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalCollectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
