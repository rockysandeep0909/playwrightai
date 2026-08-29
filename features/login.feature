Feature: login

@smoke
Scenario: Successful login using valid credentials
    Given I am in login page of saucedemo
    When I enter valid username
    And I enter valid password
    And I click on login button
    Then user should be redirected to saucedemo inventory page

Scenario: login using invalid credentials
    Given I am in login page of saucedemo
    When I enter invalid username
    And I enter valid password
    And I click on login button
    Then user shoulde get error message