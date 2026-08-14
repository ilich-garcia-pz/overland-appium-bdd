Feature: User Registration (Welcome Screen)
  As a new mobile user
  I want to complete the registration form
  So that I can proceed to the next step

Background:
  Given the user opens the mobile application
  And the user is on the Welcome registration screen

Scenario: Welcome screen initial state
  Then the title "Welcome" should be displayed
  And all input fields should be visible
  And the "Next" button should be enabled

Scenario: Name accepts up to 50 characters
  When the user enters a name with 50 characters
  Then no validation error should be displayed

Scenario: Name exceeds 50 characters
  When the user enters more than 50 characters in the "Name" field
  Then an inline error message should be displayed below the “Name” field
  And the "Next" button should remain disabled