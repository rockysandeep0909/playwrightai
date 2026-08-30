import 'dotenv/config'

export class LoginPage{

    //Region 1
constructor(page){
    this.page=page;
    this.username=page.locator("#user-name");
    this.password=page.locator("#password");
    this.loginButton=page.locator("#login-button")
}

    // Region 2
async goToLoginPageURL(){
     await this.page.goto(process.env.BaseURL);
}

async enterUsername(username){
    await this.username.fill(username)
}

async enterPassword(password){
    await this.password.fill(password)
}

async clickLoginButton(){
    await this.loginButton.click();
}

async validLogin(username = process.env.user_name, password = process.env.password){
    await this.username.fill(username)
    await this.password.fill(password)
    await this.loginButton.click();
}




}