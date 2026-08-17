Feature: Preferences Selection (Preferences Screen)
  As a user
  I want to select my interests
  So that I can complete my registration

Background:
  Given the user is on the Preferences screen

Scenario: Welcome screen initial state
  Then the title "Welcome" should be displayed
  And all input fields should be visible
  And the "Next" button should be enabled