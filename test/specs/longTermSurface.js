import App from '../pageobjects/app';
import ParkingPage from '../pageobjects/ParkingPage';

describe('Long term surface parking test', () => {
    it('Long-Term Surface Parking: should stay for one hour', () => {
        App.openPage()
        const ParkingLot = $("#ParkingLot > option:nth-child(5)");
        ParkingLot.click();
        ParkingPage.calculateTime('1/21/2021', '1/21/2021', '12:00', '1:00')
        const result = $('body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b')
        expect(result).toHaveTextContaining("$ 2.00");
    });
    
    it('Long-Term Surface Parking: should stay for four hours', () => {
        const ParkingLot = $("#ParkingLot > option:nth-child(5)");
        ParkingLot.click();
        ParkingPage.calculateTime('1/21/2021', '1/21/2021', '12:00', '4:00')
        const result = $('body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b')
        expect(result).toHaveTextContaining("$ 8.00");
    });

    it('Long-Term Surface Parking: should stay for ten hours and a half', () => {
        const ParkingLot = $("#ParkingLot > option:nth-child(5)");
        ParkingLot.click();
        ParkingPage.calculateTime('1/21/2021', '1/21/2021', '12:00', '10:30')
        const result = $('body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b')
        expect(result).toHaveTextContaining("$ 10.00");
    });

    it('Long-Term Surface Parking: should stay for a day', () => {
        const ParkingLot = $("#ParkingLot > option:nth-child(5)");
        ParkingLot.click();
        ParkingPage.calculateTime('1/21/2021', '1/22/2021', '12:00', '12:00')
        const result = $('body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b')
        expect(result).toHaveTextContaining("$ 10.00");
    });

    it('Long-Term Surface Parking: should stay for more than one day', () => {
        const ParkingLot = $("#ParkingLot > option:nth-child(5)");
        ParkingLot.click();
        ParkingPage.calculateTime('1/21/2021', '1/22/2021', '12:00', '4:00')
        const result = $('body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b')
        expect(result).toHaveTextContaining("$ 18.00");
    });

    it('Long-Term Surface Parking: should stay for one week', () => {
        const ParkingLot = $("#ParkingLot > option:nth-child(5)");
        ParkingLot.click();
        ParkingPage.calculateTime('1/21/2021', '1/28/2021', '12:00', '12:00')
        const result = $('body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b')
        expect(result).toHaveTextContaining("$ 60.00");
    });

    it('Long-Term Surface Parking: should stay for a week and two days', () => {
        const ParkingLot = $("#ParkingLot > option:nth-child(5)");
        ParkingLot.click();
        ParkingPage.calculateTime('1/21/2021', '1/30/2021', '12:00', '12:00')
        const result = $('body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b')
        expect(result).toHaveTextContaining("$ 80.00");
    });


})