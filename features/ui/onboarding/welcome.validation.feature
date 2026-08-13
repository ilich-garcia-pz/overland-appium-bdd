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