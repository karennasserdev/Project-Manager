import { TestBed } from '@angular/core/testing';

import { ProjectInfoServiceService } from './project-info-service.service';

describe('ProjectInfoServiceService', () => {
  let service: ProjectInfoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectInfoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
