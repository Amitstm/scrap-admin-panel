import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorInformationComponent } from './collector-information.component';

describe('CollectorInformationComponent', () => {
  let component: CollectorInformationComponent;
  let fixture: ComponentFixture<CollectorInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectorInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectorInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
