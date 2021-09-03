import App from '../pageobjects/app';
import ValetParkingPage from '../pageobjects/ValetParkingPage';

describe('Valet Parking test', () => {


    it('Valet Parking: should stay for a day', () => {
        App.openPage
        ValetParkingPage.fillForm('1/21/2021', '1/22/2021')
        ValetParkingPage.Calculate()
        expect(ValetParkingPage.result).toHaveTextContaining("$ 18.00");
    });
        
    /*it('Valet Parking: should stay for five hours or less', () => {
        result= $("body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b");
        inputStartDate = $('#StartingDate');
        inputEndDate = $('#LeavingDate');
        inputStartTime = $('#StartingTime');
        inputEndTime = $('#LeavingTime');
        inputStartDate.setValue('1/21/2021');
        inputEndDate.setValue('1/21/2021');
        inputStartTime.setValue('12:00');
        inputEndTime.setValue('3:00');
        Calculatebutton.click();
        expect(result).toHaveTextContaining("$ 12.00");
    });
        
    it('Valet Parking: should stay between one and two days', () => {
        result= $("body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b");
        Calculatebutton = $("body > form > input[type=submit]:nth-child(3)");
        inputStartDate = $('#StartingDate');
        inputEndDate = $('#LeavingDate');
        inputStartTime = $('#StartingTime');
        inputEndTime = $('#LeavingTime');
        inputStartDate.setValue('1/21/2021');
        inputEndDate.setValue('1/22/2021');
        inputStartTime.setValue('12:00');
        inputEndTime.setValue('3:00');
        Calculatebutton.click();
        expect(result).toHaveTextContaining("$ 36.00");
    });*/
        


})