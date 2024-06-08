'use client'

import { useRouter } from 'next/navigation'
import type { ChangeEvent } from 'react'
import { useState } from 'react'
import { Input } from '@/shared/ui/input'

const Search = () => {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState('')

  const onKeyUpHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      router.push(`search?q=${searchValue}`)
      e.currentTarget.blur()
    }
  }

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  return (
    <Input
      type="search"
      placeholder="검색어를 입력하세요"
      onChange={handleChangeSearch}
      onKeyUp={onKeyUpHandler}
      value={searchValue}
      style={{ width: '80%', display: 'flex', margin: '0 auto' }}
    />
  )
}

export default Search
