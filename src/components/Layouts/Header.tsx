import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import DarkModeSwitcher from './DarkModeSwitcher'

import { useThemeStore } from '@/store/themeStore'

function Header() {
  const { locale, toggleLocale } = useThemeStore()
  const { t } = useTranslation()

  return (
    <header className="sticky top-0 z-40 flex w-full border-b border-gray-200 bg-white dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex grow items-center justify-end px-4 md:px-6 2xl:px-11">
        <div className="2xsm:gap-7 flex items-center gap-3 py-4">
          <ul className="flex items-center gap-2 sm:gap-4">
            <span
              className="cursor-pointer text-sm text-dark dark:text-gray-200 ltr:font-Almarai rtl:font-Poppins"
              onClick={() => {
                toggleLocale(locale === 'ar' ? 'en' : 'ar')
                i18next.changeLanguage(locale === 'ar' ? 'en' : 'ar')
              }}
            >
              {t('lang')}
            </span>
            <DarkModeSwitcher />
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
