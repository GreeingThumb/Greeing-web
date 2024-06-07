import type { ReactNode } from 'react'
import { baseStyle, messageStyles } from '@/shared/ui/text-message/text-message.css'

type MessageType = 'error' | 'info' | 'warning'

interface ErrorTextProps {
  children?: ReactNode
  type?: MessageType
}

const TextMessage = ({ type = 'info', children }: ErrorTextProps) => {
  return <p className={`${baseStyle} ${messageStyles[type]}`}>{children}</p>
}

export default TextMessage
