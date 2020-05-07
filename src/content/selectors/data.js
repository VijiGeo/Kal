import { createSelector } from 'reselect';
import { orderBy, isEmpty, escapeRegExp, uniqBy } from "lodash"
import moment from 'moment';
import { searchTermSelector } from './controller'
import apps from "../fixtures/apps"

export const allTabsSelector = (state) => state.data.allTabs.items;
export const currentTabSelector = (state) => state.data.currentTab.item;
export const recentlyClosedTabsSelector = (state) => state.data.recentlyClosed.items
export const topSitesSelector = (state) => state.data.topSites.items;
export const historySelector = (state) => state.data.history.items;
export const currentTabSessionSelector = (state) => state.data.currentTabSession.items

export const normalizeTabsSelector = createSelector(allTabsSelector, currentTabSelector, recentlyClosedTabsSelector, topSitesSelector, historySelector, currentTabSessionSelector, (allTabs, currentTab, recentlyClosedTabs, topSites, history, currentTabSession) => {

  // console.log("Current Tab Session: ", currentTabSession)
  // console.log("All tabs: ", allTabs)

  const lastVisited = (n) => {
    // const uniqueCurrentTabSession = uniqBy(currentTabSession, item => item.tabId)
    // console.log("UNIQUE CURRENT", uniqueCurrentTabSession)
    return currentTabSession[currentTabSession.length - n]
  }
  const lastOneVisitedTab = lastVisited(1)
  const lastTwoVisitedTab = lastVisited(2)
  const lastThreeVisitedTab = lastVisited(3)
  const lastFourVisitedTab = lastVisited(4)
  const lastFiveVisitedTab = lastVisited(5)
  const lastSixVisitedTab = lastVisited(6)

  // console.log("CURRENT TABS SESSION", currentTabSession)
  // console.log(lastOneVisitedTab, lastTwoVisitedTab, lastThreeVisitedTab, lastFourVisitedTab, lastFiveVisitedTab)

  const enhancedTabs = allTabs.map(item => {
    const topSiteMatch = topSites.find((obj => obj.url === item.url))
    const recentlyClosedMatch = recentlyClosedTabs.find((obj) => obj.url === item.url)
    const duplicateMatches = allTabs.filter((obj) => obj.url === item.url)
    const appMatch = apps.find(app => app.urls.some(url => item.url.includes(url)))

    const historicalMatch = history.find((obj) => obj.url === item.url)
    const recentMatches = currentTabSession.filter(obj => obj.tabId === item.id)
    const recentMatchCount = recentMatches.length

    const isTopSite = !isEmpty(topSiteMatch)
    const isRecentlyClosed = !isEmpty(recentlyClosedMatch)
    const isCurrentTab = currentTab ? currentTab.id === item.id : false
    const isPinned = item ? item.pinned : false
    const isActive = item ? item.active : false
    const isDiscarded = item ? item.discarded : false

    const isLastOneVisitedTab = lastOneVisitedTab && lastOneVisitedTab.tabId === item.id ? true : false
    const isLastTwoVisitedTab = lastTwoVisitedTab && lastTwoVisitedTab.tabId === item.id ? true : false
    const isLastThreeVisitedTab = lastThreeVisitedTab && lastThreeVisitedTab.tabId === item.id ? true : false
    const isLastFourVisitedTab = lastFourVisitedTab && lastFourVisitedTab.tabId === item.id ? true : false
    const isLastFiveVisitedTab = lastFiveVisitedTab && lastFiveVisitedTab.tabId === item.id ? true : false
    const isLastSixVisitedTab = lastSixVisitedTab && lastSixVisitedTab.tabId === item.id ? true : false

    const visitCountScore = historicalMatch ? historicalMatch.visitCount : 0
    // const recentVisitCountScore = recentMatchCount * 10
    // console.log("RECENT VISIT SCORE", recentVisitCountScore, recentMatches)
    const currentTabScore = isCurrentTab ? 1000000000 : 0

    const lastOneVisitedTabScore = isLastOneVisitedTab ? 999000 : 0
    const lastTwoVisitedTabScore = isLastTwoVisitedTab ? 750000 : 0
    const lastThreeVisitedTabScore = isLastThreeVisitedTab ? 500000 : 0
    const lastFourVisitedTabScore = isLastFourVisitedTab ? 250000 : 0
    const lastFiveVisitedTabScore = isLastFiveVisitedTab ? 100000 : 0
    const lastSixVisitedTabScore = isLastSixVisitedTab ? 50000 : 0
    const totalRecencyScore = lastOneVisitedTabScore + lastTwoVisitedTabScore + lastThreeVisitedTabScore + lastFourVisitedTabScore + lastFiveVisitedTabScore + lastSixVisitedTabScore

    const pinnedScore = isPinned ? 10 : 0
    const topSiteScore = isTopSite ? 10 : 0
    const recentlyClosedScore = isRecentlyClosed ? 2.5 : 0
    const activeScore = isActive ? 2.5 : 0

    // const discardedScore = isDiscarded ? 10 : 1
    const today = moment()
    const past = historicalMatch && moment(historicalMatch.lastVisitTime)
    const daysSinceLastVisit = today.diff(past, 'days') + 1

    const historicalScore = (visitCountScore + pinnedScore + activeScore + topSiteScore + recentlyClosedScore) / (daysSinceLastVisit)
    const relevanceScore = currentTabScore + totalRecencyScore + historicalScore

    // console.log("CURRENT TAB SCORE", currentTabScore, currentTab, item)
    // console.log(item.title, totalRecencyScore, relevanceScore, historicalScore)

    return {
      ...item,
      currentTab: isCurrentTab,
      topSite: isTopSite,
      recentlyClosed: isRecentlyClosed,
      daysSinceLastVisit: daysSinceLastVisit,
      historicalMatch: historicalMatch,
      duplicateMatches: duplicateMatches,
      visitCount: visitCountScore,
      relevanceScore: relevanceScore,
      appMatch: appMatch
    }

  })
  return orderBy(enhancedTabs, item => item.relevanceScore, 'desc')
})

export const searchFilteredTabsSelector = createSelector(normalizeTabsSelector, searchTermSelector, (tabs, searchTerm) => {
  return tabs.filter(obj => {
    const searchString = new RegExp(escapeRegExp(searchTerm), 'i', 'g', 'm')
    return (obj.title.match(searchString) || obj.url.match(searchString) || (obj.appMatch && obj.appMatch.title.match(searchString)))
  })
})
