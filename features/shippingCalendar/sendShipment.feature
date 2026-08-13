Feature: Send Shipment (Shipment Details)
  As Georgia (Admin/Rep)
  I want to send a shipment's complete information by email once at least one load and one photo have been added
  So that shipment stakeholders receive final shipment documentation

Background:
  Given the user opens the mobile application
  And the user is on the Shipment Details screen for "March 5, 2026"

Scenario: "Send Shipment" button is disabled when there are no loads and no photos
  Given no loads have been added to the shipment
  And no photos have been added to the shipment
  Then the "Send Shipment" button should be disabled

Scenario: "Send Shipment" button is disabled when at least one load exists but no photos exist
  Given at least one load has been added to the shipment
  And no photos have been added to the shipment
  Then the "Send Shipment" button should be disabled

Scenario: "Send Shipment" button is disabled when at least one photo exists but no loads exist
  Given no loads have been added to the shipment
  And at least one photo has been added to the shipment
  Then the "Send Shipment" button should be disabled

Scenario: "Send Shipment" button is enabled only when at least one load and one photo exist
  Given at least one load has been added to the shipment
  And at least one photo has been added to the shipment
  Then the "Send Shipment" button should be enabled

Scenario: Tapping "Send Shipment" opens the send modal
  Given at least one load has been added to the shipment
  And at least one photo has been added to the shipment
  When the user taps the "Send Shipment" button
  Then the "Send Shipment" modal should be displayed
  And the "Send" button should be visible

Scenario: Overland recipient is selected by default and cannot be unselected
  Given the "Send Shipment" modal is displayed
  Then the "Send to Overland" option should be selected by default
  And the user should not be able to unselect the "Send to Overland" option

Scenario: Buyer and Seller email fields are optional
  Given the "Send Shipment" modal is displayed
  When the user leaves "Send to Buyer" email empty
  And the user leaves "Send to Seller" email empty
  Then the "Send" button should remain enabled

Scenario Outline: Invalid email format in an optional recipient field blocks sending
  Given the "Send Shipment" modal is displayed
  When the user enters "<invalid_email>" in the "<recipient_field>" email field
  Then an email format validation error should be shown for "<recipient_field>"
  And the "Send" button should be disabled

  Examples:
    | recipient_field | invalid_email     |
    | Send to Buyer   | buyercompany.com  |
    | Send to Buyer   | buyer@company     |
    | Send to Buyer   | buyer@@company.io |
    | Send to Seller  | sellercompany.com |
    | Send to Seller  | seller@company    |
    | Send to Seller  | seller@@company.io |

Scenario: Valid Buyer email keeps send enabled when Seller is empty
  Given the "Send Shipment" modal is displayed
  When the user enters "buyer@company.com" in the "Send to Buyer" email field
  And the user leaves "Send to Seller" email empty
  Then no email format validation error should be shown for "Send to Buyer"
  And the "Send" button should remain enabled

Scenario: Valid Seller email keeps send enabled when Buyer is empty
  Given the "Send Shipment" modal is displayed
  When the user enters "seller@company.com" in the "Send to Seller" email field
  And the user leaves "Send to Buyer" email empty
  Then no email format validation error should be shown for "Send to Seller"
  And the "Send" button should remain enabled

Scenario: One invalid recipient email disables send even if the other recipient email is valid
  Given the "Send Shipment" modal is displayed
  When the user enters "buyer@company.com" in the "Send to Buyer" email field
  And the user enters "sellercompany.com" in the "Send to Seller" email field
  Then an email format validation error should be shown for "Send to Seller"
  And the "Send" button should be disabled

Scenario: Correcting an invalid recipient email re-enables send
  Given the "Send Shipment" modal is displayed
  And the user enters "sellercompany.com" in the "Send to Seller" email field
  And the "Send" button should be disabled
  When the user replaces it with "seller@company.com" in the "Send to Seller" email field
  Then no email format validation error should be shown for "Send to Seller"
  And the "Send" button should remain enabled

Scenario: Send modal can be closed without sending
  Given the "Send Shipment" modal is displayed
  When the user closes the "Send Shipment" modal
  Then the modal should close
  And the shipment should remain in editable state

Scenario: Tapping "Send" shows confirmation modal before final submission
  Given the "Send Shipment" modal is displayed
  When the user taps the "Send" button
  Then the "Finalize Shipment?" confirmation modal should be displayed
  And the message "This action cannot be undone. Ensure all information is accurate before confirming." should be visible
  And a "Confirm" button should be visible
  And a "Cancel" button should be visible

Scenario: Cancelling final confirmation returns to the Send Shipment modal without locking shipment
  Given the "Finalize Shipment?" confirmation modal is displayed
  When the user taps "Cancel"
  Then the confirmation modal should close
  And the "Send Shipment" modal should remain displayed
  And the shipment should remain in editable state

Scenario: Confirming final submission sends shipment and closes modals
  Given the "Finalize Shipment?" confirmation modal is displayed
  When the user taps "Confirm"
  Then both modals should close
  And the shipment should be sent successfully

Scenario: After successful send, shipment is locked and marked as shipped
  Given the user has successfully sent the shipment
  Then the shipment should display the "Shipped" tag
  And shipment fields and actions should be locked from editing

Scenario: After successful send, a confirmation toast is displayed
  Given the user has successfully sent the shipment
  Then a success toast with the message "Shipment has been finalized." should be displayed

Scenario: After successful send, office contact message is displayed
  Given the user has successfully sent the shipment
  Then the message "If you see something wrong in this shipment, reach out to the office." should be displayed

Scenario: After successful send, sent information summary card is displayed
  Given the user has successfully sent the shipment
  Then an "Information sent to" summary card should be displayed
  And "Sent to Overland" should be shown
  And buyer and seller recipients should reflect entered values or "Not sent"

Scenario: Outbound email includes all shipment summary information
  Given the user has successfully sent the shipment
  When the outbound shipment email is generated
  Then the email should include shipment date, lot title, seller/origin, buyer/destination, truck, breed and sex, and base weight

Scenario: Outbound email includes all added loads and load details
  Given the shipment contains multiple loads
  And the user has successfully sent the shipment
  When the outbound shipment email is generated
  Then the email should include every load with lot, breed and sex, heads, and net weight

Scenario: Outbound email includes all added photos
  Given the shipment contains multiple photos
  And the user has successfully sent the shipment
  When the outbound shipment email is generated
  Then all shipment photos should be attached or embedded in the email

Scenario: Outbound email includes sender name
  Given the user has successfully sent the shipment
  When the outbound shipment email is generated
  Then the sender name should be included in the email metadata or body
