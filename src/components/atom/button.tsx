import type { ButtonProps } from '@/type/PropsType'

function Button({ children, btnType, btnClick, btnWidth }: ButtonProps) {
  const buttonsType = {
    success: 'btn-success',
    danger: 'btn-danger',
  }
  return (
    <button
      onClick={btnClick}
      style={{ fontSize: btnWidth ?? '16' }}
      className={`btn ${buttonsType[btnType]} `}
    >
      {children}
    </button>
  )
}

export default Button
