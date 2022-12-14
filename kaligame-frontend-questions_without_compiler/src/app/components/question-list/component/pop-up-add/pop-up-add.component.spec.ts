import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PopUpAddComponent } from './pop-up-add.component';

describe('PopUpAddComponent', () => {
  let component: PopUpAddComponent;
  let fixture: ComponentFixture<PopUpAddComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
