import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamWithoutTimeComponent } from './exam-without-time.component';

describe('ExamWithoutTimeComponent', () => {
  let component: ExamWithoutTimeComponent;
  let fixture: ComponentFixture<ExamWithoutTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamWithoutTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamWithoutTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
