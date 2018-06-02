import { HttpClient } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';

import { ApiService } from './api.service';
import { mock, instance, verify } from 'ts-mockito';

describe('ApiService', () => {
  const mockHttpClient: HttpClient = mock(HttpClient);
  const apiService: ApiService = new ApiService(instance(mockHttpClient));
  beforeEach(() => {});

  it('should call the swanson api for a single quote', () => {
    apiService.getSingleQuote();
    verify(mockHttpClient.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes')).called();
  });
});
