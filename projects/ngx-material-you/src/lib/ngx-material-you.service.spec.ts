import { TestBed } from '@angular/core/testing';

import { NgxMaterialYouService } from './ngx-material-you.service';

describe('NgxMaterialYouService', () => {
  let service: NgxMaterialYouService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMaterialYouService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
