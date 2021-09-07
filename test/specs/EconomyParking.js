import App from '../pageobjects/app';
import ParkingPage from '../pageobjects/ParkingPage';

describe('Economy lot parking test', () => {
    it('Economy Lot Parking: should stay for one hour', () => {
        App.openPage()
        const ParkingLot = $("#ParkingLot > option:nth-child(3)");
        ParkingLot.click();
        ParkingPage.calculateTime('1/21/2021', '1/21/2021', '12:00', '1:00')
        const result = $('body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b')
        expect(result).toHaveTextContaining("$ 2.00");
    });

    it('Economy Lot Parking: should stay for three hour', () => {
        const ParkingLot = $("#ParkingLot > option:nth-child(3)");
        ParkingLot.click();
        ParkingPage.calculateTime('1/21/2021', '1/21/2021', '12:00', '3:00')
        const result = $('body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b')
        expect(result).toHaveTextContaining("$ 6.00");
    });

    it('Economy Lot Parking: should stay for ten hours', () => {
        const ParkingLot = $("#ParkingLot > option:nth-child(3)");
        ParkingLot.click();
        ParkingPage.calculateTime('1/21/2021', '1/21/2021', '12:00', '10:00')
        const result = $('body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b')
        expect(result).toHaveTextContaining("$ 9.00");
    });

    it('Economy Lot Parking: should stay for a day', () => {
        const ParkingLot = $("#ParkingLot > option:nth-child(3)");
        ParkingLot.click();
        ParkingPage.calculateTime('1/21/2021', '1/22/2021', '12:00', '12:00')
        const result = $('body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b')
        expect(result).toHaveTextContaining("$ 9.00");
    });

    it('Economy Lot Parking: should stay for a week', () => {
        const ParkingLot = $("#ParkingLot > option:nth-child(3)");
        ParkingLot.click();
        ParkingPage.calculateTime('1/21/2021', '1/28/2021', '12:00', '12:00')
        const result = $('body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b')
        expect(result).toHaveTextContaining("$ 54.00");
    });

    it('Economy Lot Parking: should stay for a week and two days', () => {
        const ParkingLot = $("#ParkingLot > option:nth-child(3)");
        ParkingLot.click();
        ParkingPage.calculateTime('1/21/2021', '1/30/2021', '12:00', '12:00')
        const result = $('body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b')
        expect(result).toHaveTextContaining("$ 72.00");
    });


})