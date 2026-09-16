
import SearchBar from '../molecules/SearchBar'
import Pagination from '../molecules/Pagination'
import SearchFilters from '../molecules/SearchFilter'

import RepositoryGrid from '../organisms/RepositoryGrid'
import LoadingGrid from '../organisms/LoadingGrid'
import EmptyState from '../organisms/EmptyState'
import ErrorState from '../organisms/ErrorState'

import type { Repository } from '../../types/repository'
import type { SearchFilterValues } from '../../types/search'

type SearchPageProps = {
  query: string
  submittedQuery: string
  repositories: Repository[]
  totalCount: number
  page: number
  totalPages: number
  loading: boolean
  error: string
  hasSearched: boolean
  filters: SearchFilterValues
  onFiltersChange: (
    filters: SearchFilterValues,
  ) => void
  onClearFilters: () => void
  onQueryChange: (value: string) => void
  onSearch: (value: string) => void
  onPageChange: (page: number) => void
  onRetry: () => void
}

function SearchPage({
  query,
  submittedQuery,
  repositories,
  totalCount,
  page,
  totalPages,
  loading,
  error,
  filters,
  hasSearched,
  onFiltersChange,
  onClearFilters,
  onQueryChange,
  onSearch,
  onPageChange,
  onRetry,
}: SearchPageProps) {
  const showResults =
    !loading &&
    !error &&
    repositories.length > 0

  const showEmpty =
    hasSearched &&
    !loading &&
    !error &&
    repositories.length === 0

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950">
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <section>
          <div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              GitHubリポジトリ検索ツール
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500 sm:text-base">
              Search repositories by name, description,
              language, or topic.
            </p>
          </div>

          <SearchBar
            value={query}
            loading={loading}
            onChange={onQueryChange}
            onSearch={onSearch}
          />

          <SearchFilters
            filters={filters}
            onChange={onFiltersChange}
            onClear={onClearFilters}
          />
        </section>

        <section
          aria-live="polite"
          className="mt-8"
        >
          {loading && <LoadingGrid />}

          {!loading && error && (
            <ErrorState
              message={error}
              onRetry={onRetry}
            />
          )}

          {showEmpty && (
            <EmptyState query={submittedQuery} />
          )}

          {showResults && (
            <>
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <p className="text-sm text-zinc-500">
                  <span className="font-semibold text-zinc-800 ml-2">
                    "{submittedQuery}"
                  </span>
                  で検索結果を表示する
                </p>

                <p className="text-sm text-zinc-400">
                  ({totalCount > 1000
                    ? '1000+'
                    : totalCount.toLocaleString()}{' '}
                  results · Page {page} of {totalPages})
                </p>
              </div>

              <RepositoryGrid
                repositories={repositories}
              />

              <Pagination
                page={page}
                totalPages={totalPages}
                onPageChange={onPageChange}
              />
            </>
          )}
        </section>
      </main>
    </div>
  )
}

export default SearchPage