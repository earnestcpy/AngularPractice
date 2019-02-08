import { TestBed } from '@angular/core/testing';

import { TestingdataService } from './testingdata.service';

describe('TestingdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestingdataService = TestBed.get(TestingdataService);
    expect(service).toBeTruthy();
  });
});
