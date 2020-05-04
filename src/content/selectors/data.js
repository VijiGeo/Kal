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
    return currentTabSession[currentTabSession.length - n]
  }
  const lastOneVisitedTab = lastVisited(1)
  const lastTwoVisitedTab = lastVisited(2)
  const lastThreeVisitedTab = lastVisited(3)
  const lastFourVisitedTab = lastVisited(4)
  const lastFiveVisitedTab = lastVisited(5)

  // console.log(lastOneVisitedTab, lastTwoVisitedTab, lastThreeVisitedTab, lastFourVisitedTab, lastFiveVisitedTab)

  const enhancedTabs = allTabs.map(item => {
    const topSiteMatch = topSites.find((obj => obj.url === item.url))
    const recentlyClosedMatch = recentlyClosedTabs.find((obj) => obj.url === item.url)
    const duplicateMatches = allTabs.filter((obj) => obj.url === item.url)
    const appMatch = apps.find(app => app.urls.some(url => item.url.includes(url)))

    const historicalMatch = history.find((obj) => obj.url === item.url)
    const today = moment()
    const past = historicalMatch && moment(historicalMatch.lastVisitTime)
    const daysSinceLastVisit = today.diff(past, 'days') + 1

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

    const visitCountScore = historicalMatch ? historicalMatch.visitCount : 0.5
    const currentTabScore = isCurrentTab ? 1000000 : 0.5
    const pinnedScore = isPinned ? 500 : 0.5
    const topSiteScore = isTopSite ? 500 : 0.5
    const recentlyClosedScore = isRecentlyClosed ? 250 : 0.5
    const activeScore = isActive ? 250 : 0.5
    const discardedScore = isDiscarded ? 100 : 1

    const lastOneVisitedTabScore = isLastOneVisitedTab ? 75000 : 0.5
    const lastTwoVisitedTabScore = isLastTwoVisitedTab ? 50000 : 0.5
    const lastThreeVisitedTabScore = isLastThreeVisitedTab ? 25000 : 0.5
    const lastFourVisitedTabScore = isLastFourVisitedTab ? 10000 : 0.5
    const lastFiveVisitedTabScore = isLastFiveVisitedTab ? 5000 : 0.5

    const relevanceScore = (visitCountScore + currentTabScore + pinnedScore + discardedScore + activeScore + topSiteScore + recentlyClosedScore + lastOneVisitedTabScore + lastTwoVisitedTabScore + lastThreeVisitedTabScore + lastFourVisitedTabScore + lastFiveVisitedTabScore) / (daysSinceLastVisit + discardedScore)

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
