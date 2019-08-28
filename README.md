# Demo App: Ionic Auth Connect with Auth0

This is a reference app used in the Auth0 article (TODO update w/link) on building a login/logout experience with Ionic Auth Connect.

> Note: This is a demo/reference sample and thus may not be maintained over time. Specs: @ionic/angular 4.7.1, Angular 8.

## What Does the App Do?

(todo - embed youtube)

It demonstrates the usage of [Auth Connect](https://ionicframework.com/auth-connect) to implement a simple login/logout experience (with Auth0 as the authentication provider) that works 
on the web, iOS, and Android. Either native app runtime (Cordova or Capacitor) can be used to deploy the app to a mobile device.

## Implementation Details

This is a modified version of the Ionic `blank` starter project. There are 3 major components:

* The Home page (`src/app/home`). Displays the sign in user's profile image and details (retrieved from Auth0). Includes a button to log out of the app.
* The Login page (`src/app/login`). Protects the Home page from unauthorized access. User must sign in first via this page using Auth Connect and Auth0.
* The AuthenticationService class (`src/app/services/authentication.service.ts`). The login/logout implementation using Auth Connect and Auth0.

## How to Run

NOTE: This app requires an [Ionic Native Enterprise Edition](https://ionicframework.com/docs/enterprise) key in order to install and use the Ionic Auth Connect plugin. Enterprise Edition includes a reliable set of Native APIs & functionality that you can use in your Ionic app, quality controlled and maintained by the Ionic Team.
If you are interested in acquiring a key or learning more, please [contact us here](https://ionicframework.com/enterprise/contact).

1) Clone this repository.
2) Run `npm install`.
3) Follow the Auth Connect plugin installation instructions [here](https://ionicframework.com/docs/enterprise/auth-connect).
4) Build and Deploy to an [Android](https://ionicframework.com/docs/building/android) or [iOS](https://ionicframework.com/docs/building/ios) device.

## Resources

* [Auth0 tutorial](todo) referencing this repo (todo)
* [Auth Connect documentation](https://ionicframework.com/docs/enterprise/auth-connect)
* [Auth0 website](https://auth0.com)
