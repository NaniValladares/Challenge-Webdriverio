import App from '../pageobjects/app';
import loadPage from '../pageobjects/loadPage';

describe('Parking page', () => {


    it('should have the right title', () => {
        App.openPage()
        LoadPage.title.waitForExist()
    })

    it('should display the calculator', () => {
        App.openPage()
        LoadPage.Calculator.toBeVisible()
    })

    it('should have clickable button', () => {
        App.openPage()
        LoadPage.ClickButton.toBeClickable()
    }) 


})