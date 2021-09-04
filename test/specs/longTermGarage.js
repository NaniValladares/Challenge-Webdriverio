import App from '../pageobjects/app';
import ParkingPage from '../pageobjects/ParkingPage';

describe('Long term garage parking test', () => {


    it('Long-Term Garage Parking: should stay for one hour', () => {
        App.openPage()
        const ParkingLot = $("#ParkingLot > option:nth-child(4)");
        ParkingLot.click();
        ValetParkingPage.calculateTime('1/21/2021', '1/21/2021', '12:00', '1:00')
        const result = $('body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b')
        expect(result).toHaveTextContaining("$ 2.00"); 
    });


    it('Long-Term Garage Parking: should stay for six hours', () => {
        ValetParkingPage.calculateTime('1/21/2021', '1/21/2021', '12:00', '6:00')
        const result = $('body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b')
        expect(result).toHaveTextContaining("$ 12.00");
    });


    it('Long-Term Garage Parking: should stay for ten hours', () => {
        ValetParkingPage.calculateTime('1/21/2021', '1/21/2021', '12:00', '10:00')
        const result = $('body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b')
        expect(result).toHaveTextContaining("$ 12.00");
    });

    it('Long-Term Garage Parking: should stay for a day maximun', () => {
        ValetParkingPage.calculateTime('1/21/2021', '1/22/2021', '12:00', '12:00')
        const result = $('body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b')
        expect(result).toHaveTextContaining("$ 12.00"); 
    });

    it('Long-Term Garage Parking: should stay for a week with seven day free', () => {
        ValetParkingPage.calculateTime('1/21/2021', '1/28/2021', '12:00', '12:00')
        const result = $('body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b')
        expect(result).toHaveTextContaining("$ 72.00");
    });

    it('Long-Term Garage Parking: should stay for a week and four hours', () => {
        ValetParkingPage.calculateTime('1/21/2021', '1/28/2021', '12:00', '04:00')
        const result = $('body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b')
        expect(result).toHaveTextContaining("$ 80.00");
     });


})