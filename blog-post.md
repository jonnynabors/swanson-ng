# Becoming Swanson: Test Driving an Angular App from the Outside In.

## Introduction
`I hate everything. - Ron Swanson`  
This is how many developers feel when it comes to writing front-end code, let alone being asked to test-drive your front-end code. 

I don't feel that this should always be the case, so let's practice some outside-in test-driven-development (TDD) by creating a Ron Swanson Quote Generator in Angular.  

## What we'll build
We're going to create a small Angular application that gets data from a REST API in Heroku that randomly generates a quote from the great Ronald Ulysses Swanson. We will achieve this by: 

* Creating a component using the Angular CLI and writing a unit test for it using `ts-mockito`. 
* Creating a service using the Angular CLI and writing an integration test for it using the `HttpClientTesting` API. 
* Giving it some nice styling with Bootstrap 4. 

## Setup
Make sure that you have the Angular CLI installed on your machine. I'm using version 6.0.7 with Node 10.3.0. 

**Install the Angular CLI:** 

`npm install -g @angular/cli`

**Generate a new Angular project:**

```
ng generate swanson-ng
cd swanson-ng
```
Generate our component and service

```
ng g component single-quote
ng g service api --module app.module.ts
```

**Install Dependencies:**

With Yarn:

```
yarn add ts-mockito
yarn add rxjs-compat
```

With npm: 

```
npm install ts-mockito
npm install rxjs-compat
```

### Additional Setup
These steps are optional, but I think make developing this particular Angular app a bit easier. 

I'm a big fan of inline templates and styles in Angular. This keeps my folder structure slimmer and allows me to visualize and keep track of all of the things my component needs to work. For those that have worked with Vue, this will make you feel right at home. 
Replace the existing `schematics` object with the following in your `angular.json` file : 

```
"schematics": {
        "@schematics/angular": {
          "component": {
            "inlineStyle": true,
            "inlineTemplate": true
          }
        }
      }
```

## Let's get rolling

Let's start with a simple integration test for our ApiService class. 

### The API Service

#### Test Setup

```javascript
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
});

```

#### Mocking our desired response
We want our service to make an HTTP GET request to the remote server and return us an Observable of type string array. In the test below, we'll subscribe to that HTTP request and assert on what we get back from our mock. 

```javascript
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
```

