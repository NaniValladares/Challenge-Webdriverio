import App from '../pageobjects/app';
import ValetParkingPage from '../pageobjects/ValetParkingPage';

describe('Valet Parking test', () => {


    it('Valet Parking: should stay for a day', () => {
        App.openPage()
        ValetParkingPage.calculate('1/21/2021', '1/22/2021')
        const result = $('body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b')
        expect(result).toHaveTextContaining("$ 18.00"); 
    });
        
    it('Valet Parking: should stay for five hours or less', () => {
        ValetParkingPage.calculateTime('1/21/2021', '1/21/2021', '12:00', '3:00')
        const result = $('body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b')
        expect(result).toHaveTextContaining("$ 12.00");
    });
        
    it('Valet Parking: should stay between one and two days', () => {
        ValetParkingPage.calculateTime('1/21/2021', '1/22/2021', '12:00', '3:00')
        const result = $('body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b')
        expect(result).toHaveTextContaining("$ 36.00");
    });
        


})