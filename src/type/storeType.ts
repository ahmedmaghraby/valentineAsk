export interface themeState {
  theme: string
  rtlClass: string
  locale: string
  languageList: LanguageList[]
  pageTitle: string
  toggleTheme: (by: string) => void
  toggleLocale: (by: string) => void
  setPageTitle: (by: string) => void
}

export interface LanguageList {
  code: string
  name: string
}
