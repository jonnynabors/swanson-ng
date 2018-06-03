# Becoming Swanson: Test Driving an Angular App from the Outside In.

## Introduction
`I hate everything. - Ron Swanson`  
This is how many developers feel when it comes to writing front-end code, let alone being asked to test-drive your front-end code. 

I don't feel that this should always be the case, so let's practice some outside-in test-driven-development (TDD) by creating a Ron Swanson Quote Generator in Angular.  

## Goals
* Understand the right kind of tests to write
* Work with a real REST API
* Scaffold a new project using the Angular CLI 
* Use the London School of TDD

## Setup
Make sure that you have the Angular CLI installed on your machine. I'm using version 6.0.7 with Node 10.3.0. 

**Install the Angular CLI:** 

`npm install -g @angular/cli`

**Generate a new Angular project:**

`ng generate swanson-ng`

**Install Dependencies:**

Inside of your newly generated project directory:

* Yarn : `brew install yarn`
* Initialize your project with Yarn: `yarn`
* ts-mockito: `yarn add ts-mockito`


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

