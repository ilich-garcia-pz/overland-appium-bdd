Feature: Same as Mailing Address Checkbox (Personal Info Screen)
  As a new mobile user
  I want to use a checkbox to copy my mailing address to the physical address field
  So that I can avoid entering the same address twice

Background:
  Given the user opens the mobile application
  And the user is on the Personal Info registration screen

  # ─── Checkbox Initial State ───────────────────────────────────────────────────

Scenario: "Same as Mailing Address" checkbox is visible and unchecked by default
  Then the "Same as Mailing Address" checkbox should be visible
  And the checkbox should be unchecked by default
  And the physical address field should be enabled

  # ─── Selecting the Checkbox ───────────────────────────────────────────────────

Scenario: Checking the checkbox copies mailing address to physical address
  Given the user has entered "2205 TX-141, Kingsville, TX 78363" in the mailing address field
  When the user checks the "Same as Mailing Address" checkbox
  Then the physical address field should display "2205 TX-141, Kingsville, TX 78363"

Scenario: Checking the checkbox disables the physical address field
  Given the user has entered "2205 TX-141, Kingsville, TX 78363" in the mailing address field
  When the user checks the "Same as Mailing Address" checkbox
  Then the physical address field should be disabled

  # ─── Unchecking the Checkbox ──────────────────────────────────────────────────

Scenario: Unchecking the checkbox re-enables the physical address field
  Given the user has entered "2205 TX-141, Kingsville, TX 78363" in the mailing address field
  And the user has checked the "Same as Mailing Address" checkbox
  When the user unchecks the "Same as Mailing Address" checkbox
  Then the physical address field should be enabled

Scenario: Unchecking the checkbox retains the copied value in the physical address field
  Given the user has entered "2205 TX-141, Kingsville, TX 78363" in the mailing address field
  And the user has checked the "Same as Mailing Address" checkbox
  When the user unchecks the "Same as Mailing Address" checkbox
  Then the physical address field should still display "2205 TX-141, Kingsville, TX 78363"

  # ─── Updating Mailing Address While Checkbox Is Selected ──────────────────────

Scenario: Updating mailing address syncs to physical address on field blur
  Given the user has checked the "Same as Mailing Address" checkbox
  And the mailing address field displays "2205 TX-141, Kingsville, TX 78363"
  When the user clears the mailing address field and enters "1000 Main St, Houston, TX 77002"
  And the user moves focus away from the mailing address field
  Then the physical address field should display "1000 Main St, Houston, TX 77002"

Scenario: Physical address field does not update while the user is still typing in the mailing address field
  Given the user has checked the "Same as Mailing Address" checkbox
  And the mailing address field displays "2205 TX-141, Kingsville, TX 78363"
  When the user clears the mailing address field and enters "1000 Main St, Houston, TX 77002"
  And the mailing address field still has focus
  Then the physical address field should still display "2205 TX-141, Kingsville, TX 78363"

  # ─── Edge Cases ───────────────────────────────────────────────────────────────

Scenario: Checking the checkbox with an empty mailing address leaves physical address empty
  Given the mailing address field is empty
  When the user checks the "Same as Mailing Address" checkbox
  Then the physical address field should be empty
  And the physical address field should be disabled

Scenario: Clearing mailing address while checkbox is checked syncs empty value on blur
  Given the user has checked the "Same as Mailing Address" checkbox
  And the mailing address field displays "2205 TX-141, Kingsville, TX 78363"
  When the user clears the mailing address field
  And the user moves focus away from the mailing address field
  Then the physical address field should be empty
