import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Alpine DEX',
  description:
    'The most popular AMM on BSC by user count! Earn ADEX through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by Alpine DEX), NFTs, and more, on a platform you can trust.',
  image: 'https://alpinedex.finance/logo.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Alpine DEX')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Alpine DEX')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Alpine DEX')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Alpine DEX')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Alpine DEX')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Alpine DEX')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('Alpine DEX')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Alpine DEX')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Alpine DEX')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('Alpine DEX')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('Alpine DEX')}`,
      }
    default:
      return null
  }
}
