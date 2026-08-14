@ui @regression @onboarding
Feature: Welcome screen validation rules
  As a QA engineer
  I want to validate Welcome screen behavior
  So that users get correct UI feedback before continuing

  Background:
    Given the user opens the mobile application
    And the user is on the Welcome registration screen

  @smoke
  Scenario: Welcome screen initial state
    Then the title "Welcome" should be displayed
    And all input fields should be visible
    And the "Next" button should be enabled

  Scenario: Name accepts up to 50 characters
    When the user enters a name with 50 characters
    Then no validation error should be displayed

  Scenario: Name does not exceed 50 characters
    When the user tries to enter more than 50 characters in the Name field
    Then no validation error should be displayed below the Name field
    And the "Next" button should be enabled

  Scenario: Business Name accepts up to 100 characters
    When the user enters a business name with 100 characters
    Then no validation error should be displayed

  Scenario: Business Name does not exceed 100 characters
    When the user tries to enter more than 100 characters in the Business Name field
    Then no validation error should be displayed below the Business Name field
    And the "Next" button should be enabled

  Scenario: Valid phone number
    When the user enters exactly 10 digits in the "Phone Number" field
    Then no validation error should be displayed