# Brastewark

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.0-rc.1.

## Live
This example is deployed on https://test.ielpo.net

Connection is full https using http2 protocol

Images are caching using httpd server

## Performance
### Google lighthouse results
#### Desktop
![alt text](https://test.ielpo.net/img/desktop.png)

#### Mobile
![alt text](https://test.ielpo.net/img/mobile.png)

## Info
The gender is calculated using "gender-detection" library and if the result is "unknown" then I assume arbitrarly then pink and green hair gnomes are female.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Release
To release the app `npm run release`

## Running unit tests

There is only the backbone of the test.. follow the .spec file to prepare it and then... run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

There is only the backbone of the test.. follow the .spec file to prepare it and then... Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
