import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontWithoutTimeComponent } from './front-without-time.component';

describe('FrontWithoutTimeComponent', () => {
  let component: FrontWithoutTimeComponent;
  let fixture: ComponentFixture<FrontWithoutTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontWithoutTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontWithoutTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
