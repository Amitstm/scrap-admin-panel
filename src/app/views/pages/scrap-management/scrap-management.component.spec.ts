import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrapManagementComponent } from './scrap-management.component';

describe('ScrapManagementComponent', () => {
  let component: ScrapManagementComponent;
  let fixture: ComponentFixture<ScrapManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrapManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrapManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
