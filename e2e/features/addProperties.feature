Feature:
As a admin
I want to add a property 
So that I can sell it

Scenario:
Given the admin user has logged in with the following credentials:
 | email                            | password    |
 | madhavi.easyinnovation@gmail.com | madhavi@123 |
And the user is in the properties page
When the admin user fills basic info:
 | title         | description                   | price | 
 | home for sale | beautiful house is available  | 1     |

 And the user enters the location details:
 |properyarea | city    | muncipality         | wardno | streetaddress |
 |lekhnath    | pokhara | pokhara muncipality | 27     | 10            |

 And the user enters the property details: 
 |propertyfacing | roadtype  | yearbuilt  | bedrooms | bathrooms | 
 |west           | paved     | 1990       | 4        | 3         |

 And the user uploads the photos of the house

Then the property must be added to all properties