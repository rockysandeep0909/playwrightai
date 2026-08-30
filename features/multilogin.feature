Feature: Login with multiple users

@multitestdata
Scenario Outline: Successful Login using valid Credential
    Given I am in login page of saucedemo
    When i enter username "<username>" and password "<password>"
    And I click on login button
    Then user should be redirected to saucedemo inventory page

    Examples:
    |username|password|
    |standard_user|secret_sauce|
    |problem_user|secret_sauce|
    |performance_glitch_user|secret_sauce|
    |locked_out_user|secret_sauce|