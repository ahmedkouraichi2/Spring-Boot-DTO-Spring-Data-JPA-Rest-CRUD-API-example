import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PopUpDeleteConfirmComponent } from './pop-up-delete-confirm.component';

describe('PopUpDeleteConfirmComponent', () => {
  let component: PopUpDeleteConfirmComponent;
  let fixture: ComponentFixture<PopUpDeleteConfirmComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpDeleteConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpDeleteConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
