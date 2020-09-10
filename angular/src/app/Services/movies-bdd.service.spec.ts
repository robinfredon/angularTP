import { TestBed } from '@angular/core/testing';

import { MoviesBddService } from './movies-bdd.service';

describe('MoviesBddService', () => {
  let service: MoviesBddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesBddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
