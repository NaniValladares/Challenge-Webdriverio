import Base from '../pageobjects/base'

class LoadPage extends Base{

    get title(){
        return $('Parking Cost Calculator')
    }

    get calculator(){
       return $('body > form > table > tbody')
    }

    get Clickbutton(){
        return $('body > form > input[type=submit]:nth-child(3)')
    }

}


export default new LoadPage()