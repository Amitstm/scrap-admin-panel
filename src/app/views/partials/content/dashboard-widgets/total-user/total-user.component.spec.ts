import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalUserComponent } from './total-user.component';

describe('TotalUserComponent', () => {
  let component: TotalUserComponent;
  let fixture: ComponentFixture<TotalUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
