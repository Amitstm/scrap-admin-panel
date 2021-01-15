import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingCollectorListComponent } from './pending-collector-list.component';

describe('PendingCollectorListComponent', () => {
  let component: PendingCollectorListComponent;
  let fixture: ComponentFixture<PendingCollectorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingCollectorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingCollectorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
