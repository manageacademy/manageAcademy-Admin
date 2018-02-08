import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaFormControllerComponent } from './ma-form-controller.component';

describe('MaFormControllerComponent', () => {
  let component: MaFormControllerComponent;
  let fixture: ComponentFixture<MaFormControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaFormControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaFormControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
