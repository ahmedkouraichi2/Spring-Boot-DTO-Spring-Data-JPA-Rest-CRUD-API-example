import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PopUpEditQuestionComponent } from './pop-up-edit-question.component';

describe('PopUpEditQuestionComponent', () => {
  let component: PopUpEditQuestionComponent;
  let fixture: ComponentFixture<PopUpEditQuestionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpEditQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpEditQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
