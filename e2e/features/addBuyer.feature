Feature:
As a admin
I want to add a buyer
So that I can sell the property to them

Scenario:
Given the admin user is logged in with the following credentials:
 | email                            | password    |
 | madhavi.easyinnovation@gmail.com | madhavi@123 |
And the user is in the buyers page
When the user enters the client information with following details:
 | clientName | phoneNumber | address | propertyRequirement | paymentmethod | Urgency | referredBy |
 | Ram        | 981234567   | Pokhara | 1BHK                | bank          | Urgent  | Madhavi    |

Then the buyer shall be added