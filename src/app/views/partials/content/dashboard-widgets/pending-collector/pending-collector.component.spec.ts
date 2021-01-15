import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingCollectorComponent } from './pending-collector.component';

describe('PendingCollectorComponent', () => {
  let component: PendingCollectorComponent;
  let fixture: ComponentFixture<PendingCollectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingCollectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingCollectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
