import { createSelector } from 'reselect';
import { orderBy, isEmpty, escapeRegExp } from "lodash"
import moment from 'moment';
import { searchTermSelector } from './controller'
import apps from "../fixtures/apps"

export const allTabsSelector = (state) => state.data.allTabs.items;
export const currentTabSelector = (state) => state.data.currentTab.item;
export const recentlyClosedTabsSelector = (state) => state.data.recentlyClosed.items
export const topSitesSelector = (state) => state.data.topSites.items;
export const historySelector = (state) => state.data.history.items;
export const recentlyVisited = (state) => state.data.recentlyVisited.items

export const normalizeTabsSelector = createSelector(allTabsSelector, currentTabSelector, recentlyClosedTabsSelector, topSitesSelector, historySelector, (allTabs, currentTab, recentlyClosedTabs, topSites, history) => {

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

    const visitCountScore = historicalMatch ? historicalMatch.visitCount : 0
    const currentTabScore = isCurrentTab ? 2500 : 1
    const pinnedScore = isPinned ? 1000 : 1
    const topSiteScore = isTopSite ? 500 : 1
    const recentlyClosedScore = isRecentlyClosed ? 250 : 1
    const activeScore = isActive ? 250 : 1
    const discardedScore = isDiscarded ? 100 : 1

    const relevanceScore = (visitCountScore + currentTabScore + pinnedScore + discardedScore + activeScore + topSiteScore + recentlyClosedScore) / (daysSinceLastVisit + discardedScore)

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
