import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import themeConfig from '@/theme.config'
import type { themeState } from '@/type/storeType'

export const useThemeStore = create<themeState>()(
  devtools(
    persist(
      set => ({
        theme: themeConfig.theme,
        rtlClass: themeConfig.rtlClass,
        locale: themeConfig.locale,
        languageList: [
          { code: 'en', name: 'English' },
          { code: 'ar', name: 'Arabic' },
        ],
        pageTitle: 'valentine Ask',
        toggleTheme: by => set(() => ({ theme: by })),
        toggleLocale: by => {
          set(() => ({ locale: by }))
          set(() => ({ rtlClass: by === 'ar' ? 'rtl' : '' }))
          document.querySelector('html')?.setAttribute('dir', by === 'ar' ? 'rtl' : 'ltr')
          document.querySelector('html')?.setAttribute('lang', by)
        },
        setPageTitle: by => set(() => ({ pageTitle: by })),
      }),
      {
        name: 'ThemeStatePersist',
      },
    ),
    {
      store: 'Theme',
      name: 'Theme',
    },
  ),
)
