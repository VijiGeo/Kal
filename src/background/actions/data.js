import moment from 'moment';

export const SET_HISTORY_SUCCEEDED = 'SET_HISTORY_SUCCEEDED';
export const SET_ALL_TABS_SUCCEEDED = "SET_ALL_TABS_SUCCEEDED"
export const SET_CURRENT_TAB_SUCCEEDED = 'SET_CURRENT_TAB_SUCCEEDED';
export const SET_RECENTLY_CLOSED_SUCCEEDED = 'SET_RECENTLY_CLOSED_SUCCEEDED';
export const SET_TOP_SITES_SUCCEEDED = 'SET_TOP_SITES_SUCCEEDED';
export const SET_RECENTLY_VISITED_SUCCEEDED = "SET_RECENTLY_VISITED_SUCCEEDED"

export const setHistorySucceeded = (response) => ({
  type: SET_HISTORY_SUCCEEDED,
  payload: response,
  timestamp: moment()
});

export const setAllTabsSucceeded = (response) => ({
  type: SET_ALL_TABS_SUCCEEDED,
  payload: response,
  timestamp: moment()
});

export const setCurrentTabSucceeded = (response) => ({
  type: SET_CURRENT_TAB_SUCCEEDED,
  payload: response,
  timestamp: moment()
});

export const setRecentlyClosedSucceeded = (response) => ({
  type: SET_RECENTLY_CLOSED_SUCCEEDED,
  payload: response,
  timestamp: moment()
});

export const setTopSitesSucceeded = (response) => ({
  type: SET_TOP_SITES_SUCCEEDED,
  payload: response,
  timestamp: moment()
});

export const setRecentlyVisitedSucceeded = (response) => ({
  type: SET_RECENTLY_VISITED_SUCCEEDED,
  payload: response,
  timestamp: moment()
});