import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamWithTimeComponent } from './exam-with-time.component';

describe('ExamWithTimeComponent', () => {
  let component: ExamWithTimeComponent;
  let fixture: ComponentFixture<ExamWithTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamWithTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamWithTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
