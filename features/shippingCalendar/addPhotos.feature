Feature: Add and Remove Photos (Shipment Details)
  As Georgia (Admin/Rep)
  I want to add photos from my phone gallery to a shipment and delete them when needed
  So that visual documentation is captured

Background:
  Given the user opens the mobile application
  And the user is on the Shipment Details screen for "March 5, 2026"

  # ─── Open Gallery And Permissions ─────────────────────────────────────────────

Scenario: "Add Photo" row is visible on the Shipment Details screen
  Then the "Add Photo" row should be visible
  And no photo thumbnails should be displayed in the photo card

Scenario: Tapping "Add Photo" opens the phone gallery when permission is already granted
  Given photo library permission has already been granted
  When the user taps the "Add Photo" row
  Then the phone gallery should be displayed

Scenario: Tapping "Add Photo" requests gallery permission when not yet granted
  Given photo library permission has not been granted
  When the user taps the "Add Photo" row
  Then a photo library permission prompt should be displayed

Scenario: Granting permission opens the phone gallery
  Given photo library permission has not been granted
  And the user taps the "Add Photo" row
  When the user allows photo library access
  Then the phone gallery should be displayed

Scenario: Denying permission does not open the phone gallery
  Given photo library permission has not been granted
  And the user taps the "Add Photo" row
  When the user denies photo library access
  Then the phone gallery should not be displayed
  And the user should remain on the Shipment Details screen

  # ─── Add Photo From Gallery ───────────────────────────────────────────────────

Scenario: Selecting a photo from gallery adds a thumbnail to the shipment photo card
  Given photo library permission has already been granted
  And the phone gallery is displayed
  When the user selects a photo from the gallery
  Then the user should return to the Shipment Details screen
  And the selected photo thumbnail should be displayed in the photo card
  And a delete "X" control should be displayed on that thumbnail

Scenario: Selecting multiple photos adds each photo as a thumbnail
  Given photo library permission has already been granted
  And the phone gallery is displayed
  When the user selects multiple photos from the gallery
  Then all selected photos should be displayed as thumbnails in the photo card

  # ─── Full Screen Preview ──────────────────────────────────────────────────────

Scenario: Tapping a photo thumbnail opens the photo in full screen
  Given at least one photo thumbnail is displayed in the photo card
  When the user taps a photo thumbnail
  Then the tapped photo should open in full screen

Scenario: Closing full screen returns to Shipment Details with the same photos
  Given a photo is open in full screen
  When the user closes the full screen view
  Then the user should return to the Shipment Details screen
  And previously added photo thumbnails should still be displayed

  # ─── Delete Photo ──────────────────────────────────────────────────────────────

Scenario: Tapping "X" deletes a photo thumbnail from the shipment
  Given at least one photo thumbnail is displayed in the photo card
  When the user taps the "X" control on a photo thumbnail
  Then that photo thumbnail should no longer be displayed in the photo card

Scenario: Deleting one photo does not remove other photos
  Given at least two photo thumbnails are displayed in the photo card
  When the user taps the "X" control on one photo thumbnail
  Then exactly one photo thumbnail should be removed
  And the other photo thumbnails should remain displayed

Scenario: Deleting the last remaining photo leaves the photo card empty
  Given exactly one photo thumbnail is displayed in the photo card
  When the user taps the "X" control on that photo thumbnail
  Then no photo thumbnails should be displayed in the photo card
