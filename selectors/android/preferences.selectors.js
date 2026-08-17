const byResourceId = (id) => `android=new UiSelector().resourceIdMatches(".*${id}$")`;

export const selectors = {
  titleText: byResourceId('preferences_title_text'),
  dairyCattleCheckbox: byResourceId('preferences_dairy_cattle_checkbox'),
  beefAndFeedersCheckbox: byResourceId('preferences_beef_and_feeders_checkbox'),
  videoAuctionCheckbox: byResourceId('preferences_video_auction_checkbox'),
  liveAuctionCheckbox: byResourceId('preferences_live_auction_checkbox'),
  dairyDispersalCheckbox: byResourceId('preferences_dairy_dispersal_checkbox'),
  equipmentCheckbox: byResourceId('preferences_equipment_checkbox'),
  allCheckbox: byResourceId('preferences_all_checkbox')
};