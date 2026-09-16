import { Search } from 'lucide-react'
import type { FormEvent } from 'react'

import Button from '../atoms/Button'

type SearchBarProps = {
  value: string
  loading?: boolean
  placeholder?: string
  onChange: (value: string) => void
  onSearch: (value: string) => void
}

function SearchBar({
  value,
  loading = false,
  placeholder = 'キーワードを入力する…',
  onChange,
  onSearch,
}: SearchBarProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const trimmed = value.trim()

    if (!trimmed || loading) {
      return
    }

    onSearch(trimmed)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={[
        'mt-8 flex w-full gap-2 rounded-2xl',
        'border border-zinc-200 bg-white p-2',
        'shadow-[0_10px_40px_-20px_rgba(0,0,0,.25)]',
        'focus-within:border-zinc-400',
      ].join(' ')}
    >
      <div className="flex min-w-0 flex-1 items-center gap-3 px-3">
        <Search
          className="shrink-0 text-zinc-400"
          size={20}
          aria-hidden="true"
        />

        <input
          type="search"
          aria-label="Search GitHub repositories"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          disabled={loading}
          className={[
            'w-full bg-transparent py-2.5 text-md',
            'outline-none placeholder:text-zinc-400',
            'disabled:cursor-not-allowed disabled:opacity-60',
          ].join(' ')}
        />
      </div>

      <Button
        type="submit"
        disabled={!value.trim() || loading}
      >
        {loading ? '検索中…' : '検索'}
      </Button>
    </form>
  )
}

export default SearchBar