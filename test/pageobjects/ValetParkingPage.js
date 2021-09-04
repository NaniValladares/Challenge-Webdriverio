import { subset } from 'semver';
import Base from '../pageobjects/base';

class ValetParkingPage extends Base{

    get Calculatebutton(){
        return $('body > form > input[type=submit]:nth-child(3)')
    }
    get inputStart(){
        return $('#StartingDate')
    } 

    get inputFinish(){
        return $('#LeavingDate')
    } 

    calculate(startDate,endDate){
        this.inputStart.setValue(startDate)
        this.inputFinish.setValue(endDate)
        this.Calculatebutton.click()
        this.pauseMedium()
    }
}

export default new ValetParkingPage()