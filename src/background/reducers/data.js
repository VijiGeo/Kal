import {
  SET_HISTORY_SUCCEEDED,
  SET_ALL_TABS_SUCCEEDED,
  SET_CURRENT_TAB_SUCCEEDED,
  SET_RECENTLY_CLOSED_SUCCEEDED,
  SET_TOP_SITES_SUCCEEDED,
  // SET_APP_GROUPS_SUCCEEDED
} from '../actions/data';

const initialState = {
  allTabs: {
    items: [],
    fetching: false,
    error: null
  },
  currentTab: {
    item: {},
    fetching: false,
    error: null
  },
  recentlyClosed: {
    items: [],
    fetching: false,
    error: null
  },
  topSites: {
    items: [],
    fetching: false,
    error: null
  },
  history: {
    items: [],
    fetching: false,
    error: null
  },
  // appGroups: {
  //   items: [],
  //   fetching: false,
  //   error: null
  // }
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HISTORY_SUCCEEDED:
      return {
        ...state,
        history: {
          items: action.payload,
          fetching: false,
          error: null
        }
      };
    case SET_ALL_TABS_SUCCEEDED:
      return {
        ...state,
        allTabs: {
          items: action.payload,
          fetching: false,
          error: null
        }
      };
    case SET_CURRENT_TAB_SUCCEEDED:
      return {
        ...state,
        currentTab: {
          items: action.payload,
          fetching: false,
          error: null
        }
      };
    case SET_RECENTLY_CLOSED_SUCCEEDED:
      return {
        ...state,
        recentlyClosed: {
          items: action.payload,
          fetching: false,
          error: null
        }
      };
    case SET_TOP_SITES_SUCCEEDED:
      return {
        ...state,
        topSites: {
          items: action.payload,
          fetching: false,
          error: null
        }
      };
    // case SET_APP_GROUPS_SUCCEEDED:
    //   return {
    //     ...state,
    //     appGroups: {
    //       items: action.payload,
    //       fetching: false,
    //       error: null
    //     }
    //   };
    default:
      return state;
  }
};
