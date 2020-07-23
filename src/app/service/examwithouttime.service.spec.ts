import { TestBed } from '@angular/core/testing';

import { ExamwithouttimeService } from './examwithouttime.service';

describe('ExamwithouttimeService', () => {
  let service: ExamwithouttimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamwithouttimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
