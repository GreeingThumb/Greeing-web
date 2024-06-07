import { motion } from 'framer-motion'
import type { ChangeEvent } from 'react'
import { Input } from '@/shared/ui/input'

interface EmailAuthCodeProps {
  isError: boolean
  isEmailSend: boolean
  isVerified: boolean
  value: string
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const EmailAuthCode = ({ isError, isVerified, isEmailSend, handleChange, value }: EmailAuthCodeProps) => {
  if (isVerified) return <></>
  return (
    <>
      {isEmailSend && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: 'backOut',
            delay: 0.2,
          }}
        >
          <Input placeholder="인증번호" value={value} onChange={handleChange} maxLength={6} isError={isError} />
        </motion.div>
      )}
    </>
  )
}

export default EmailAuthCode
