import Base from '../pageobjects/base'

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

    get result(){
        return $('body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b')
    }
 

    fillForm(startDate,endDate){
        this.inputStart.setValue(startDate)
        this.inputFinish.setValue(endDate)
    }

    submitCalculateDates(){
        this.Calculatebutton.click()
    }

    calculate(startDate,endDate){
        this.inputStart.setValue(startDate)
        this.inputFinish.setValue(endDate)
        this.Calculatebutton.click()
        this.pauseMedium()
    }
}

export default new ValetParkingPage()