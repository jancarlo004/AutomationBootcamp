import { PcfComponent } from '@gtui/gt-ui-framework';
import {Selector,t} from 'testcafe';

class RadioButton{

    constructor(cssSelector){
        this.component = Selector(cssSelector);
    }
    
    // String contains 'false' for No 'true' for Yes
    async selectRadioButtonValue(value){
        var _this = this;
        await t.click(_this.component.find('input').withAttribute('value',value))
    }

    async selectRadioButtonByLabel(value){
        var _this2 = this;
        let radiobutton = _this2.component.find('span').withExactText(value).sibling('div');
        await t.click(radiobutton);
    };
}

export var PcfRadioButton = function(cssSelector){
    return new RadioButton(cssSelector);
}