
import { createStore } from 'redux';
import rootReducer from './reducers';
import { wrapStore } from 'webext-redux';
import {
  commandPanelToggled
} from './actions/controller';
import {
  setHistorySucceeded,
  setCurrentTabsSucceeded,
  setRecentlyClosedSucceeded,
  setTopSitesSucceeded,
  setAppGroupsSucceeded
} from './actions/data';
import apps from "./fixtures/apps.json"


const store = createStore(rootReducer, {});

wrapStore(store);
console.log("STORE: ", store.getState())


chrome.commands.onCommand.addListener(function (command) {
  console.log('Command: ', command);
  if (command === "toggle-feature") {
    const isPanelToggled = store.getState().controller.commandPanelToggled
    store.dispatch(commandPanelToggled(!isPanelToggled))
    console.log("NEW STORE: ", isPanelToggled, store.getState())
  }
});


const getAllTabs = () => new Promise((resolve) => {
  chrome.tabs.query({
  }, (tabs) => {
    store.dispatch(setCurrentTabsSucceeded(tabs))
    resolve(tabs);
  })
})

const getRecentlyClosed = () => new Promise((resolve) => {
  chrome.sessions.getRecentlyClosed({}, (session) => {
    store.dispatch(setRecentlyClosedSucceeded(session))
    resolve(session);
  })
})

const getTopSites = () => new Promise((resolve) => {
  chrome.topSites.get((sites) => {
    store.dispatch(setTopSitesSucceeded(sites))
    resolve(sites)
  })
})

const getHistory = (past) => new Promise((resolve) => {
  chrome.history.search({ text: '', startTime: parseFloat(past), maxResults: 7500 }, (history) => {
    store.dispatch(setHistorySucceeded(history))
    resolve(history)
  })
})

store.dispatch(setAppGroupsSucceeded(apps))
console.log("TABS: ", getAllTabs())
console.log("RECENTLY CLOSED: ", getRecentlyClosed())
console.log("TOP SITES: ", getTopSites())
console.log("HISTORY: ", getHistory())