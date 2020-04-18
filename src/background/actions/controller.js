import moment from 'moment';

export const SEARCH_TERM_UPDATED = 'SEARCH_TERM_UPDATED';
export const ACTIVE_GROUP_TYPE_UPDATED = 'ACTIVE_GROUP_TYPE_UPDATED';
export const ACTIVE_GROUP_ID_UPDATED = 'ACTIVE_GROUP_ID_UPDATED';
export const COMMAND_PANEL_TOGGLED = 'COMMAND_PANEL_TOGGLED';
export const COMMAND_BAR_FOCUSED = 'COMMAND_BAR_FOCUSED';
export const ACTIVE_MODE_SET = 'ACTIVE_MODE_SET'
export const ACTIVE_ITEM_SET = 'ACTIVE_ITEM_SET'

export const searchTermUpdated = (response) => ({
  type: SEARCH_TERM_UPDATED,
  payload: response,
  timestamp: moment()
});

export const activeGroupTypeUpdated = (response) => ({
  type: ACTIVE_GROUP_TYPE_UPDATED,
  payload: response,
  timestamp: moment()
});

export const activeGroupIdUpdated = (response) => ({
  type: ACTIVE_GROUP_ID_UPDATED,
  payload: response,
  timestamp: moment()
});

export const commandPanelToggled = (response) => ({
  type: COMMAND_PANEL_TOGGLED,
  payload: response,
  timestamp: moment()
});

export const commandBarFocused = (response) => ({
  type: COMMAND_BAR_FOCUSED,
  payload: response,
  timestamp: moment()
});

export const activeModeSet = (response) => ({
  type: ACTIVE_MODE_SET,
  payload: response,
  timestamp: moment()
});


export const activeItemSet = (response) => ({
  type: ACTIVE_ITEM_SET,
  payload: response,
  timestamp: moment()
});