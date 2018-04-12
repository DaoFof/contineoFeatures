import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerPopUpComponent } from './date-picker-pop-up.component';

describe('DatePickerPopUpComponent', () => {
  let component: DatePickerPopUpComponent;
  let fixture: ComponentFixture<DatePickerPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePickerPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
