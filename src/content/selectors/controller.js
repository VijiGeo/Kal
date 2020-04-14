import { createSelector } from 'reselect';

export const activeGroupIdSelector = (state) => state.controller.activeGroupId
export const searchTermSelector = (state) => state.controller.searchTerm
export const commandPanelToggledSelector = (state) => state.controller.commandPanelToggled