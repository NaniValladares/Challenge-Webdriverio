import Base from '../pageobjects/base'

class LoadPage extends Base{

    get title(){
        return $('.PageTitle')
    }
    get Calculator(){
        return $('body > form > table > tbody')
     }
 
    get clickButton(){
        return $('/html/body/form/input[2]')
    }

    submitForm() {
        this.clickButton.click()
    }


}

export default new LoadPage()