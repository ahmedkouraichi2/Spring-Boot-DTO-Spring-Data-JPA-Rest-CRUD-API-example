import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PopUpAddQuestionComponent } from './pop-up-add-question.component';

describe('PopUpAddQuestionComponent', () => {
  let component: PopUpAddQuestionComponent;
  let fixture: ComponentFixture<PopUpAddQuestionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpAddQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpAddQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
