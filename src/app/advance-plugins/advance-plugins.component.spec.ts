import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancePluginsComponent } from './advance-plugins.component';

describe('AdvancePluginsComponent', () => {
  let component: AdvancePluginsComponent;
  let fixture: ComponentFixture<AdvancePluginsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancePluginsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancePluginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
