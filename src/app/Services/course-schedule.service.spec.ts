import { TestBed } from '@angular/core/testing';

import { CourseScheduleService } from './course-schedule.service';

describe('CourseScheduleServiceService', () => {
  let service: CourseScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
