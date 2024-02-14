import type { ReactNode } from 'react'

export interface DefaultLayoutProps {
  children: ReactNode
}
export interface ButtonProps {
  children: ReactNode
  btnType: 'success' | 'danger'
  btnClick: () => void
  btnWidth?: number
}
