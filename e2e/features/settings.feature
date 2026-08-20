Feature: Manage Settings
  As an admin user
  I want to manage my account settings
  So that I can keep my profile and preferences up to date
  
  Background:
    Given the user is already logged in with the following credentials:
    | email                            | password    |
    | madhavi.easyinnovation@gmail.com | madhavi@123 |
    And the user is on the Settings page


  # ---------------------------------------------------
  # Profile
  # ---------------------------------------------------

  Scenario: View profile settings
    When the user navigates to the Profile settings
    Then the Profile heading should be displayed

  Scenario: Update profile
    When the user navigates to the Profile settings
    And the user updates the profile name to "Test User"
    And the user updates the phone number to "98123456780"
    And the user clicks the Update profile button
    Then the profile should be updated successfully



  # ---------------------------------------------------
  # My Details
  # ---------------------------------------------------

  Scenario: View My Details settings
    When the user navigates to the My Details settings
    Then the My Details settings should be displayed


  # ---------------------------------------------------
  # Daily Log
  # ---------------------------------------------------

  Scenario: View Daily Log settings
    When the user navigates to the Daily Log settings
    Then the Daily Log settings should be displayed


  Scenario: Submit daily log
    When the user navigates to the Daily Log settings
    And the user enters the required daily log details
    Then the daily log should be added successfully


  # ---------------------------------------------------
  # Sales Target
  # ---------------------------------------------------

  Scenario: View Sales Target settings
    When the user navigates to the Sales Target settings
    Then the Sales Target settings should be displayed


  Scenario: Set a sales target
    When the user navigates to the Sales Target settings
    And the user enters a valid sales target
    Then the sales target should be saved successfully


  Scenario: Add sales
    When the user navigates to the Sales Target settings
    And the user adds sales 
    Then the sales should be added successfully


  # ---------------------------------------------------
  # KYC
  # ---------------------------------------------------

  Scenario: View KYC settings
    When the user navigates to the KYC settings
    Then the KYC settings should be displayed


  Scenario: Submit valid KYC details
    When the user navigates to the KYC settings
    And the user uploads the required KYC documents
    Then the KYC details should be submitted successfully

  # ---------------------------------------------------
  # Appearance
  # ---------------------------------------------------

  Scenario: View Appearance settings
    When the user navigates to the Appearance settings
    Then the Appearance settings should be displayed


  Scenario: Change application appearance
    When the user navigates to the Appearance settings
    And the user selects a different appearance option
    Then the application appearance should be changed successfully
