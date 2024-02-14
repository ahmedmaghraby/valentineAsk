import i18next from 'i18next'
import { useEffect, useState } from 'react'
import { useThemeStore } from '@/store/themeStore'

function usePresistInit() {
  const { theme, toggleTheme, locale, toggleLocale } = useThemeStore()

  const [hasInitializedStore, setHasInitializedStore] = useState(false)

  useEffect(() => {
    if (!hasInitializedStore && typeof window !== 'undefined') {
      console.warn('sssssssssss')

      toggleTheme(theme)
      toggleLocale(locale)
      i18next.changeLanguage(locale)
      setHasInitializedStore(true)
    }
  }, [hasInitializedStore, toggleTheme, toggleLocale])
}

export default usePresistInit
