import { TestBed } from '@angular/core/testing';

import { NgxMaterialWebService } from './ngx-material-web.service';

describe('NgxMaterialWebService', () => {
  let service: NgxMaterialWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMaterialWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
