
import { createStore } from 'redux';
import rootReducer from './reducers';
import { wrapStore } from 'webext-redux';
import {
  setHistorySucceeded,
  setAllTabsSucceeded,
  setRecentlyClosedSucceeded,
  setTopSitesSucceeded,
  setCurrentTabSessionSucceeded
} from './actions/data';

const store = createStore(rootReducer, {});
wrapStore(store);

const getAllTabs = () => new Promise((resolve) => {
  chrome.tabs.query({
  }, (tabs) => {
    store.dispatch(setAllTabsSucceeded(tabs))
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

const executeModalOpen = (command) => {
  getAllTabs()
  chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
    const currentTab = tabs[0]
    chrome.tabs.sendMessage(currentTab.id, { command: command, currentTab: currentTab }, {}, function (response) {
      // console.log("MODAL RESPONSE: ", response)
    })
  })

}

chrome.browserAction.onClicked.addListener(function (tab) {
  executeModalOpen("toggle-feature")
});

chrome.commands.onCommand.addListener(function (command) {
  if (command === "toggle-feature") {
    executeModalOpen(command)
  }
});

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.type === "switchToTab") {
      chrome.tabs.update(request.tab, { highlighted: true, active: true }, (response) => {
        chrome.windows.update(response.windowId, { focused: true })
        sendResponse({ data: "TAB_SWITCH_SUCCESS" });
      })
    }
    sendResponse({ data: {} })
  }
);

chrome.tabs.onCreated.addListener(function (tab) {
  // console.log("TAB CREATED", tab)
  getAllTabs()

})

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  // console.log("TAB UPDATED", tabId, changeInfo, tab)
  getAllTabs()
})

chrome.tabs.onActivated.addListener(function (activeInfo) {
  console.log("ACTIVE TAB CHANGED", activeInfo)
  // const currentTabSession = store.getState().data.currentTabSession.items
  // console.log("CURRENT SESSION", currentTabSession)
  store.dispatch(setCurrentTabSessionSucceeded(activeInfo))

})


getRecentlyClosed()
getHistory()
getTopSites()


