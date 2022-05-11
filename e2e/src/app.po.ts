import { browser, by, element } from 'protractor';

export class AppPage {

  appName = element(by.id('nombreApp'));

  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getNombreApp(){
    return this.appName.getText() as Promise<string>;
  }
}
