import { Injectable } from '@angular/core';
import { IonicAuth, IonicAuthOptions } from '@ionic-enterprise/auth';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

const auth0CordovaConfig : IonicAuthOptions = {
  // the auth provider
  authConfig: 'auth0',
  // The platform which we are running on
  platform: 'cordova',
  // client or application id for provider
  clientID: 'FILL-IN',
  // the discovery url for the provider
  // OpenID configuration
  discoveryUrl: 'FILL-IN',
  // the URI to redirect to after log in
  redirectUri: 'FILL-IN',
  // requested scopes from provider
  scope: 'openid offline_access email picture profile',
  // the audience, if applicable
  audience: 'FILL-IN',
  // the URL to redirect to after log out
  logoutUrl: 'FILL-IN',
  // The type of iOS webview to use. 'shared' will use a webview that can share session/cookies
  // on iOS to provide SSO across multiple apps but will cause a prompt for the user which asks them
  // to confirm they want to share site data with the app. 'private' uses a webview which will not
  // prompt the user but will not be able to share session/cookie data either for true SSO across
  // multiple apps.
  iosWebView: 'private'
};

const auth0WebConfig : IonicAuthOptions = {
  // the auth provider
  authConfig: 'auth0',
  // The platform which we are running on
  platform: 'web',
  // client or application id for provider
  clientID: 'FILL-IN',
  // the discovery url for the provider
  // OpenID configuration
  discoveryUrl: 'FILL-IN',
  // the URI to redirect to after log in
  redirectUri: 'FILL-IN',
  // requested scopes from provider
  scope: 'openid offline_access email picture profile',
  // the audience, if applicable
  audience: 'FILL-IN',
  // the URL to redirect to after log out
  logoutUrl: 'FILL-IN',
  // The type of iOS webview to use. 'shared' will use a webview that can share session/cookies
  // on iOS to provide SSO across multiple apps but will cause a prompt for the user which asks them
  // to confirm they want to share site data with the app. 'private' uses a webview which will not
  // prompt the user but will not be able to share session/cookie data either for true SSO across
  // multiple apps.
  iosWebView: 'private',
  implicitLogin: 'CURRENT'
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends IonicAuth {

  private router: Router;
  private loadingIndicator: HTMLIonLoadingElement;

  constructor(router: Router, platform: Platform) {
      // Determine whether to run on mobile or the web
      const selectedConfig = platform.is("cordova") ? auth0CordovaConfig : auth0WebConfig;
      super(selectedConfig);

      this.router = router;
    }

     async login(loadingIndicator) {
       this.loadingIndicator = loadingIndicator;

       await super.login();
     }

     // Event fired by Auth Connect upon successful login to auth provider.
    async onLoginSuccess(response: any) {
      await this.router.navigate(['home']);

      // Implicit login: POPUP flow
      if (this.loadingIndicator) {
        this.loadingIndicator.dismiss();
      }
    }

     // Called as part of CURRENT implicit login flow only
     async callback(url, loadingIndicator) {
       loadingIndicator.dismiss();

       await super.handleCallback(url);
     }

    // Log out of auth provider, then automatically redirect to the app page
    // specified in the `logoutUrl` property
    async logout() {
      await super.logout();
    }

    async onLogout() {
      await this.router.navigate(['login']);
    }

    async isAuthenticated() {
      return await super.isAuthenticated();
    }

    async getUserInfo() {
      return await super.getIdToken();
    }
}
