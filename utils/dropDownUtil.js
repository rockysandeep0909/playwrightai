class DropDownUtil {

    async selectDropDownOption(dropdownLocator,optionvalue){

        await dropdownLocator.selectOption(optionvalue)
    }
}


// we will revisit this once we understand objects and class in detail manner