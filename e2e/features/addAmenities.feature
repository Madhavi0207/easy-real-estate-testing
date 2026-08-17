Feature: Add Amenities
As a admin
I want to add amenities
So that I can add it to property

Scenario: Add Amenities
  Given the user is already in the login page and in the property page
   | email                            | password    |
   | madhavi.easyinnovation@gmail.com | madhavi@123 |
  And the user is in the amenities page
  When the user fills the amenity form
    | title   |
    | Kitchen |
  Then the amenity shall be added in the amenities page