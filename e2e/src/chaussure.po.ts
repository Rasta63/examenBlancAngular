import { browser, by, element } from 'protractor';

export class chaussurePage {

    sleep() {
      browser.driver.sleep(2000);
    }
    completeForm() {
        let nom = element.all(by.id('nom'));
        let marque = element.all(by.css('.marque'));
        let type = element.all(by.id('type'));
        let taille = element.all(by.id('taille'));
        nom.sendKeys('test');
        marque.get(1);
        type.sendKeys('Ville');
        taille.sendKeys(43);
      }
}