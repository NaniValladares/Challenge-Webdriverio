import App from '../pageobjects/app';
import LoadPage from '../pageobjects/loadPage';

describe('Parking page', () => {


    it('should have the right title', () => {
        App.openPage()
        LoadPage.title.waitForExist()
    })

    it('should display the calculator', () => {
        App.openPage()
        LoadPage.Calculator.waitForExist()
    })

    it('should have clickable button', () => {
        LoadPage.submitForm();
    }) 


})