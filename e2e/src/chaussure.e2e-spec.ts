import {browser, element, logging, by} from 'protractor';
import {chaussurePage} from './chaussure.po';

describe('Teste des chaussures',()=>{
    let page : chaussurePage;
    let nbChaussure : number;

    beforeEach(()=>{
        page = new chaussurePage();
        browser.get('/chaussures');
        page.sleep();
    });

    it('Recherche le lien d\'ajout de chaussure et clique dessus',()=>{
        element.all(by.css('.chaussureLine')).then(totalRows =>{
            this.nbChaussure = totalRows.length;
            element(by.css('#addChaussure')).click();
            page.sleep();
            expect(browser.driver.getCurrentUrl()).toContain('/chaussure/ajout');
        });
        page.sleep();
    });

    it('Test le formulaire', ()=>{
        browser.get('/chaussure/ajout');
        page.completeForm();
        page.sleep();
        let submitBtn = element.all(by.css('#submitBtn'));
        submitBtn.click().then(fn =>{
            element.all(by.css('.chaussureLine')).then(totalNewARows => {
                this.nbChaussure +=1;
                const compareChaussure = this.nbChaussure;
                expect(totalNewARows.length).toEqual(compareChaussure);
                page.sleep();
            });
        });
    });

    it('Test de la suppression', () => {
        browser.get('/chaussures');
        page.sleep();
        let lastDeleteButton = element.all(by.css('.retirerChaussure')).last();
        lastDeleteButton.click().then(fn => {
          element.all(by.css('.chaussureLine')).then(totalNewRows => {
            this.nbChaussure -= 1;
            const compare = this.nbChaussure ;
            expect(totalNewRows.length).toEqual(compare);
          });
        });
      });
    
    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
          level: logging.Level.SEVERE,
        } as logging.Entry));
      });

});
