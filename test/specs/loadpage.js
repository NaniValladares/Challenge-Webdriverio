//import {short,medium,long} from '../lib/timeout'
import App from '../pageobjects/app';

describe('Parking page', () => {


    it('should have the right title', () => {
        expect(browser).toHaveTitle('Parking Cost Calculator');
    })

    it('should display the calculator', () => {
        const Calculator = $("body > form > table > tbody");
        expect(Calculator).toBeVisible();
    })

    it('should have clickable button', () => {
        const ClickButton = $("body > form > input[type=submit]:nth-child(3)");
        expect(ClickButton).toBeClickable();
    })


})