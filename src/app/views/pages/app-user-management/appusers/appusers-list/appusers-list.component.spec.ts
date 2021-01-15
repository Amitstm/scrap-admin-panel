import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppusersListComponent } from './appusers-list.component';

describe('AppusersListComponent', () => {
  let component: AppusersListComponent;
  let fixture: ComponentFixture<AppusersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppusersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppusersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
