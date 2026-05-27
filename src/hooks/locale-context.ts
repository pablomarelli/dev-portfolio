import { createContext } from 'react'

import { localeContent, type Locale } from '../data/portfolio'

export interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
  portfolioData: (typeof localeContent)[Locale]['portfolio']
  ui: (typeof localeContent)[Locale]['ui']
}

export const LocaleContext = createContext<LocaleContextValue | null>(null)
