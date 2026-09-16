import { ChevronDown, ChevronUp } from 'lucide-react'

import Button from '../atoms/Button'
import type { SearchFilterValues } from '../../types/search'
import { useState } from 'react'

type SearchFiltersProps = {
  filters?: SearchFilterValues
  onChange: (
    filters: SearchFilterValues,
  ) => void
  onClear: () => void
}

function SearchFilters({
  filters,
  onChange,
  onClear,
}: SearchFiltersProps) {
  const [isOpen, setIsOpen] = useState(true)
  const safeFilters: SearchFilterValues =
    filters ?? {
      user: '',
      language: '',
      topic: '',
      stars: '',
      forks: '',
    }

  const hasFilters = Object.values(
    safeFilters,
  ).some((value) => value.trim() !== '')

  function updateFilter(
    key: keyof SearchFilterValues,
    value: string,
  ) {
    onChange({
      ...safeFilters,
      [key]: value,
    })
  }

  return (
    <div className="mt-3 rounded-2xl border border-zinc-200 bg-white p-4">
      <div className="flex items-center justify-between gap-3">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2">
          {!isOpen ? <ChevronDown
            size={20}
            className="text-zinc-500"
            aria-hidden="true"
          /> : <ChevronUp size={20}
            className="text-zinc-500"
            aria-hidden="true" />}
          <h2
            className="text-md font-semibold text-zinc-500">
            詳細設定
          </h2>
        </div>

        {hasFilters && (
          <Button
            type="button"
            variant="warn"
            size="sm"
            onClick={onClear}
            className="h-6 text-xs"
          >
            クリア
          </Button>
        )}
      </div>

      {isOpen &&
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <label className="block">
            <span className="mb-1.5 block text-xs font-medium text-zinc-600">
              User
            </span>

            <input
              type="text"
              value={safeFilters.user}
              onChange={(event) =>
                updateFilter(
                  'user',
                  event.target.value,
                )
              }
              placeholder="例：enjinia"
              className={[
                'w-full rounded-xl border border-zinc-200',
                'bg-white px-3 py-2.5 text-sm',
                'outline-none transition',
                'placeholder:text-zinc-400',
                'focus:border-zinc-400',
              ].join(' ')}
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-xs font-medium text-zinc-600">
              Language
            </span>

            <input
              type="text"
              value={safeFilters.language}
              onChange={(event) =>
                updateFilter(
                  'language',
                  event.target.value,
                )
              }
              placeholder="例：TypeScript"
              className={[
                'w-full rounded-xl border border-zinc-200',
                'bg-white px-3 py-2.5 text-sm',
                'outline-none transition',
                'placeholder:text-zinc-400',
                'focus:border-zinc-400',
              ].join(' ')}
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-xs font-medium text-zinc-600">
              Topic
            </span>

            <input
              type="text"
              value={safeFilters.topic}
              onChange={(event) =>
                updateFilter(
                  'topic',
                  event.target.value,
                )
              }
              placeholder="例：plugin"
              className={[
                'w-full rounded-xl border border-zinc-200',
                'bg-white px-3 py-2.5 text-sm',
                'outline-none transition',
                'placeholder:text-zinc-400',
                'focus:border-zinc-400',
              ].join(' ')}
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-xs font-medium text-zinc-600">
              Minimum stars
            </span>

            <input
              type="number"
              min="0"
              value={safeFilters.stars}
              onChange={(event) =>
                updateFilter(
                  'stars',
                  event.target.value,
                )
              }
              placeholder="例：100"
              className={[
                'w-full rounded-xl border border-zinc-200',
                'bg-white px-3 py-2.5 text-sm',
                'outline-none transition',
                'placeholder:text-zinc-400',
                'focus:border-zinc-400',
              ].join(' ')}
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-xs font-medium text-zinc-600">
              Minimum forks
            </span>

            <input
              type="number"
              min="0"
              value={safeFilters.forks}
              onChange={(event) =>
                updateFilter(
                  'forks',
                  event.target.value,
                )
              }
              placeholder="例：10"
              className={[
                'w-full rounded-xl border border-zinc-200',
                'bg-white px-3 py-2.5 text-sm',
                'outline-none transition',
                'placeholder:text-zinc-400',
                'focus:border-zinc-400',
              ].join(' ')}
            />
          </label>
        </div>}
    </div>
  )
}

export default SearchFilters
