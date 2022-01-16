import { MenuEntry } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/pool',
      },{
        label: t('Bridge'),
        href: 'https://www.binance.org/en/bridge',
      },
      
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Pools'),
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: t('Telegram'),
        href: 'https://t.me/Alpinecoin_chat',
      },
      {
        label: t('Twitter'),
        href: 'https://twitter.com/Alpine_Coin?s=09',
      },
      {
        label: t('Facebook'),
        href: 'https://www.facebook.com/groups/533480764602020/?ref=share',
      }
    ],
  },
]

export default config
