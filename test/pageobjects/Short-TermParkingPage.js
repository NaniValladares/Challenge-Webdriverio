import { subset } from 'semver';
import Base from '../pageobjects/base';

class ShortTermParkingPage extends Base{

    get Calculatebutton(){
        return $('body > form > input[type=submit]:nth-child(3)')
    }
    get inputStart(){
        return $('#StartingDate')
    } 

    get inputFinish(){
        return $('#LeavingDate')
    } 

    get inputStartTime(){
        return $('#StartingTime')
    } 
        
    get inputEndTime(){
        return $('#LeavingTime');
    } 

    get ParkingLot(){
        return $("#ParkingLot > option:nth-child(2)")
    }

    calculate(startDate,endDate,startTime,endTime){
        this.ParkingLot.click()
        this.inputStart.setValue(startDate)
        this.inputFinish.setValue(endDate)
        this.inputStartTime.setValue(startTime)
        this.inputEndTime.setValue(endTime)
        this.Calculatebutton.click()
        this.pauseShort()
    }

}

export default new ShortTermParkingPage()