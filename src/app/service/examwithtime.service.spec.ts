import { TestBed } from '@angular/core/testing';

import { ExamwithtimeService } from './examwithtime.service';

describe('ExamwithtimeService', () => {
  let service: ExamwithtimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamwithtimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
