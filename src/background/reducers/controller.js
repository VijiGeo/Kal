import {
  SEARCH_TERM_UPDATED,
  ACTIVE_GROUP_TYPE_UPDATED,
  ACTIVE_GROUP_ID_UPDATED,
  COMMAND_PANEL_TOGGLED,
  COMMAND_BAR_FOCUSED,
  ACTIVE_MODE_SET,
  ACTIVE_ITEM_SET
} from '../actions/controller';

const initialState = {
  commandPanelToggled: false,
  commandBarFocused: true,
  activeMode: "HOME",
  activeItem: 0,
  searchTerm: '',
  activeGroupType: "app",
  activeGroupId: 1
};

export const controllerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_TERM_UPDATED:
      return {
        ...state,
        searchTerm: action.payload
      };
    case ACTIVE_GROUP_TYPE_UPDATED:
      return {
        ...state,
        activeGroupType: action.payload
      };
    case ACTIVE_GROUP_ID_UPDATED:
      return {
        ...state,
        activeGroupId: action.payload
      };
    case COMMAND_PANEL_TOGGLED:
      return {
        ...state,
        commandPanelToggled: action.payload
      };
    case COMMAND_BAR_FOCUSED:
      return {
        ...state,
        commandBarFocused: action.payload
      };
    case ACTIVE_MODE_SET:
      return {
        ...state,
        activeMode: action.payload
      };
    case ACTIVE_ITEM_SET:
      return {
        ...state,
        activeItem: action.payload
      };
    default:
      return state;
  }
};
