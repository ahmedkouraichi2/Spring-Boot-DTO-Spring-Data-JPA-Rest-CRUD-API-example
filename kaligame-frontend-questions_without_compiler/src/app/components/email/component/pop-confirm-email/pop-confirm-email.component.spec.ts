import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopConfirmEmailComponent } from './pop-confirm-email.component';

describe('PopConfirmEmailComponent', () => {
  let component: PopConfirmEmailComponent;
  let fixture: ComponentFixture<PopConfirmEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopConfirmEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopConfirmEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
