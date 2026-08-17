@e2e @smoke @regression @onboarding
Feature: Create user from Welcome flow
  As a new mobile user
  I want to complete the Welcome form successfully
  So that I can proceed to the next onboarding step

  Background:
    Given the user opens the mobile application
    And the user is on the Welcome registration screen

  @wip
  Scenario: User completes the Welcome form successfully
    When the user enters a name with 50 characters
    And the user enters a business name with 100 characters
    And the user enters exactly 10 digits in the Phone Number field
    And the user enters a valid email address
    And the user types a mailing address
    And the user selects a mailing address from Google Places suggestions
    And the user types a physical address
    And the user selects a physical address from Google Places suggestions
    And the user clicks on the "Next" button
    Then the user should be navigated to the next onboarding step
    When the user selects Equipment preference
    And the user clicks on the "Get Started" button
    Then the user should be navigated to the Home screen