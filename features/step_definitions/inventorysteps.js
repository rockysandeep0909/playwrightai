import {Given,When,Then} from '@cucumber/cucumber'


When('I click on add to cart button', function () {
 console.log("add to cart button")
});

Then('item should be added to cart page', function () {
 console.log("item added successful")
});
