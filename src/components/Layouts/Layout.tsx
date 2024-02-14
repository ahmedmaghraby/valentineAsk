import Header from './Header'
import type { DefaultLayoutProps } from '@/type/PropsType'

function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark ">
      <div className="flex h-screen overflow-hidden">
        <div className="relative flex flex-1 flex-col overflow-auto">
          <Header />
          <main>{children}</main>
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout
