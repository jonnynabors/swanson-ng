import { ApiService } from './../api.service';
import { mock, instance, when } from 'ts-mockito';
import { SingleQuoteComponent } from './single-quote.component';
import { Observable } from 'rxjs';
import 'rxjs/add/Observable/of';

describe('SingleQuoteComponent', () => {

  it('should set a value for quotes from the api service', () => {
    const mockApiService: ApiService = mock(ApiService);
    const expectedApiResult = [
      'Keep your tears in your eyes where they belong.'
    ];
    const singleQuoteComponent: SingleQuoteComponent = new SingleQuoteComponent(instance(mockApiService));
    when(mockApiService.getSingleQuote()).thenReturn(Observable.of(expectedApiResult));
    singleQuoteComponent.ngOnInit();
    expect(singleQuoteComponent.quotes).toEqual(expectedApiResult);
  });
});
