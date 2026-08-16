Feature: Add Facilities
As a admin 
I want to add a facilites
So that I can list them in the property

Scenario: Add Facilities
Given the user is loggin in with the valid credential:
 | email                            | password    |
 | madhavi.easyinnovation@gmail.com | madhavi@123 |
 And the user is in the property page
And the user is in facilities page
When the user fills the create facilites form:
 | title   | value                |
 | Parking | Parking is available |

Then the facilites shall added in the facilites page