Feature:
As a admin 
I want to login to the admin site
So that I can manage the user and properties

Scenario:
Given The user is already in the login page
When The user enters the following credentials 
    | email                            | password   |
    | madhavi.easyinnovation@gmail.com | madhavi@123|

Then The user shall enter the admin page