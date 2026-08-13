@e2e @smoke @regression @onboarding
Feature: Create user from Welcome flow
  As a new mobile user
  I want to complete the Welcome form successfully
  So that I can proceed to the next onboarding step

  Background:
    Given the user opens the mobile application
    And the user is on the Welcome registration screen

  Scenario: User can provide valid Welcome data without validation errors
    Then the title "Welcome" should be displayed
    When the user enters a name with 50 characters
    Then no validation error should be displayed
    And the "Next" button should be enabled