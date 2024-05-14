import * as style from './style.css'

interface IButton {
  onClick?: (event: React.MouseEvent) => void
  children: React.ReactNode
}

export const Button = ({ onClick, children }: IButton) => {
  return (
    <button type="button" onClick={onClick} className={style.button}>
      {children}
    </button>
  )
}
