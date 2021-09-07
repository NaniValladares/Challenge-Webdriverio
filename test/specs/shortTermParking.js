import App from '../pageobjects/app';
import ParkingPage from '../pageobjects/ParkingPage';

describe('Short term parking test', () => {
    it('Short-Term: should stay for one hour', () => {
        App.openPage()
        const ParkingLot = $("#ParkingLot > option:nth-child(2)");
        ParkingLot.click();
        ParkingPage.calculateTime('1/21/2021', '1/21/2021', '12:00', '1:00')
        const result = $('body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b')
        expect(result).toHaveTextContaining("$ 2.00"); 
    });


    it('Short-Term: should stay for two hours', () => {
        const ParkingLot = $("#ParkingLot > option:nth-child(2)");
        ParkingLot.click();
        ParkingPage.calculateTime('1/21/2021', '1/21/2021', '12:00', '2:00')
        const result = $('body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b')
        expect(result).toHaveTextContaining("$ 4.00");
    });

    it('Short-Term: should stay for five hours and a half', () => {
        const ParkingLot = $("#ParkingLot > option:nth-child(2)");
        ParkingLot.click();
        ParkingPage.calculateTime('1/21/2021', '1/21/2021', '12:00', '5:30')
        const result = $('body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b')
        expect(result).toHaveTextContaining("$ 11.00");
    });

    it('Short-Term: should stay for a complete day', () => {
        const ParkingLot = $("#ParkingLot > option:nth-child(2)");
        ParkingLot.click();
        ParkingPage.calculateTime('1/21/2021', '1/22/2021', '12:00', '12:00')
        const result = $('body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b')
        expect(result).toHaveTextContaining("$ 24.00");
    });

    it('Short-Term: should stay for a day and 2 hours', () => {
        const ParkingLot = $("#ParkingLot > option:nth-child(2)");
        ParkingLot.click();
        ParkingPage.calculateTime('1/21/2021', '1/22/2021', '12:00', '2:00')
        const result = $('body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b')
        expect(result).toHaveTextContaining("$ 28.00");
    });

})