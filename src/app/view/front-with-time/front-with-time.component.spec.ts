import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontWithTimeComponent } from './front-with-time.component';

describe('FrontWithTimeComponent', () => {
  let component: FrontWithTimeComponent;
  let fixture: ComponentFixture<FrontWithTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontWithTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontWithTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
