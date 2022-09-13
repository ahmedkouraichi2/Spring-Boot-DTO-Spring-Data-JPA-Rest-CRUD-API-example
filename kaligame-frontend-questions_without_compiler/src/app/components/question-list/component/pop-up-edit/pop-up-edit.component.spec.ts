import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PopUpEditComponent } from './pop-up-edit.component';

describe('PopUpEditComponent', () => {
  let component: PopUpEditComponent;
  let fixture: ComponentFixture<PopUpEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
