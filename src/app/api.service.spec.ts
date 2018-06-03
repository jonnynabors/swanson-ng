
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let injector: TestBed;
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    injector = getTestBed();
    service = injector.get(ApiService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return an Observable<String[]>', () => {
    const expectedResult = ['Keep your tears in your eyes where they belong.'];

    service.getSingleQuote().subscribe(actualResult => {
      expect(actualResult).toBe(expectedResult);
    });

    const actualRequest = httpMock.expectOne(
      'http://ron-swanson-quotes.herokuapp.com/v2/quotes'
    );
    expect(actualRequest.request.method).toBe('GET');
    actualRequest.flush(expectedResult);
  });
});
