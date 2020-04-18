
import { createStore } from 'redux';
import rootReducer from './reducers';
import { wrapStore } from 'webext-redux';
import {
  commandPanelToggled
} from './actions/controller';
import {
  setHistorySucceeded,
  setAllTabsSucceeded,
  setCurrentTabSucceeded,
  setRecentlyClosedSucceeded,
  setTopSitesSucceeded,
} from './actions/data';


const store = createStore(rootReducer, {});

wrapStore(store);

export const getCurrentTab = () => new Promise((resolve) => {
  chrome.tabs.query({ currentWindow: true, active: true, lastFocusedWindow: true }, (tabs) => {
    const currentTab = tabs[0]
    // console.log("TABS", currentTab)
    store.dispatch(setCurrentTabSucceeded(currentTab))
    resolve(currentTab)
  })
})

export const getAllTabs = () => new Promise((resolve) => {
  chrome.tabs.query({
  }, (tabs) => {
    store.dispatch(setAllTabsSucceeded(tabs))
    resolve(tabs);
  })
})

export const getRecentlyClosed = () => new Promise((resolve) => {
  chrome.sessions.getRecentlyClosed({}, (session) => {
    store.dispatch(setRecentlyClosedSucceeded(session))
    resolve(session);
  })
})

export const getTopSites = () => new Promise((resolve) => {
  chrome.topSites.get((sites) => {
    store.dispatch(setTopSitesSucceeded(sites))
    resolve(sites)
  })
})

export const getHistory = (past) => new Promise((resolve) => {
  chrome.history.search({ text: '', startTime: parseFloat(past), maxResults: 7500 }, (history) => {
    store.dispatch(setHistorySucceeded(history))
    resolve(history)
  })
})

// store.dispatch(setAppGroupsSucceeded(apps))
// console.log("TABS: ", getAllTabs())
// console.log("RECENTLY CLOSED: ", getRecentlyClosed())
// console.log("TOP SITES: ", getTopSites())
// console.log("HISTORY: ", getHistory())

chrome.commands.onCommand.addListener(function (command) {
  console.log('Command: ', command);
  if (command === "toggle-feature") {
    const isPanelToggled = store.getState().controller.commandPanelToggled
    getCurrentTab()
    getAllTabs()
    store.dispatch(commandPanelToggled(!isPanelToggled))
  }
});

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    // console.log(sender.tab.id)
    if (request.type == "tabId")
      // console.log("SENDER", sender.tab.data)
      // store.dispatch(setCurrentTabSucceeded(sender.tab.data))
      sendResponse({ data: sender.tab });
  }
);

getRecentlyClosed()
getHistory()
getTopSites()
