Feature: Add and Delete Loads (Shipment Details)
  As Georgia (Admin/Rep)
  I want to add and delete loads within a shipment
  So that the manifest accurately reflects what is being transported

Background:
  Given the user opens the mobile application
  And the user is on the Shipment Details screen for "March 5, 2026"

  # ─── Add Load Modal ───────────────────────────────────────────────────────────

Scenario: "Add Loads" row is visible on the Shipment Details screen
  Then the "Add Loads" row should be visible
  And no loads should be listed under the loads card

Scenario: Tapping "Add Loads" opens the Add Load modal
  When the user taps the "Add Loads" row
  Then the "Add Load" modal should be displayed
  And the "Lots" field should be visible
  And the "Breed & Sex" field should be visible
  And the "Heads" field should be visible
  And the "Net Weight" field should be visible

  # ─── Required Fields Validation ───────────────────────────────────────────────

Scenario: "Add Load" button is disabled when all fields are empty
  Given the user has opened the "Add Load" modal
  Then the "Add Load" button should be disabled

Scenario Outline: "Add Load" button remains disabled when any required field is missing
  Given the user has opened the "Add Load" modal
  When the user fills in all fields except "<missing_field>"
  Then the "Add Load" button should be disabled

  Examples:
    | missing_field |
    | Lots          |
    | Breed & Sex   |
    | Heads         |
    | Net Weight    |

Scenario: "Add Load" button becomes enabled when all required fields are filled
  Given the user has opened the "Add Load" modal
  When the user enters "ABCD" in the "Lots" field
  And the user enters "Ang Hol Str" in the "Breed & Sex" field
  And the user enters "1,000" in the "Heads" field
  And the user enters "450" in the "Net Weight" field
  Then the "Add Load" button should be enabled

  # ─── Adding a Load ────────────────────────────────────────────────────────────

Scenario: Successfully adding a load appends it to the loads card
  Given the user has opened the "Add Load" modal
  And the user enters "ABCD" in the "Lots" field
  And the user enters "Ang Hol Str" in the "Breed & Sex" field
  And the user enters "1,000" in the "Heads" field
  And the user enters "450" in the "Net Weight" field
  When the user taps the "Add Load" button
  Then the modal should close
  And load "#1" should appear in the loads card with:
    | field        | value       |
    | Lot          | 101-A       |
    | Breed & Sex  | Ang Hol Str |
    | Heads        | 105         |
    | Net Weight   | 45,000 lbs  |

Scenario: Adding multiple loads lists them sequentially in the loads card
  Given the user has already added load "#1" to the shipment
  When the user adds another load with valid data
  Then load "#2" should appear in the loads card below load "#1"

Scenario: Adding a load enables the "Send Shipment" button
  Given no loads have been added to the shipment
  And the "Send Shipment" button should be disabled
  When the user successfully adds a load
  Then the "Send Shipment" button should be enabled

  # ─── Deleting a Load ──────────────────────────────────────────────────────────

Scenario: Each load in the loads card has a delete icon
  Given the user has already added at least one load to the shipment
  Then each load entry should display a delete icon

Scenario: Tapping the delete icon shows a confirmation modal
  Given the user has already added load "#1" to the shipment
  When the user taps the delete icon on load "#1"
  Then the "Delete Load?" confirmation modal should be displayed
  And the message "This action cannot be undone." should be visible
  And a "Cancel" button should be visible
  And a "Delete" button should be visible

Scenario: Cancelling the delete confirmation keeps the load in the list
  Given the user has already added load "#1" to the shipment
  And the "Delete Load?" confirmation modal is displayed
  When the user taps "Cancel"
  Then the modal should close
  And load "#1" should still appear in the loads card

Scenario: Confirming deletion removes the load from the loads card
  Given the user has already added load "#1" to the shipment
  And the "Delete Load?" confirmation modal is displayed
  When the user taps "Delete"
  Then the modal should close
  And load "#1" should no longer appear in the loads card

Scenario: Deleting the only load disables the "Send Shipment" button
  Given the user has only one load added to the shipment
  When the user confirms deletion of that load
  Then the "Send Shipment" button should be disabled

Scenario: Deleting one load from multiple loads re-numbers the remaining loads
  Given the user has added load "#1" and load "#2" to the shipment
  When the user confirms deletion of load "#1"
  Then only one load should remain in the loads card
