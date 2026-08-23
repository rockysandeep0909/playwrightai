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

async enterUsername(){
    await this.username.fill(process.env.user_name)
}

async enterPassword(){
    await this.password.fill(process.env.password)
}

async clickLoginButton(){
    await this.loginButton.click();
}

async validLogin(){
    await this.username.fill(process.env.user_name)
    await this.password.fill(process.env.password)
    await this.loginButton.click();
}




}