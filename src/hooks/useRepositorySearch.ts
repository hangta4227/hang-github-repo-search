import {
  useCallback,
  useMemo,
  useState,
} from 'react'

import {
  searchRepositories,
} from '../services/github'

import type {
  Repository,
} from '../types/repository'
import type {
  SearchFilterValues,
} from '../types/search'

const PER_PAGE = 12
const MAX_SEARCH_RESULTS = 1000

type UseRepositorySearchResult = {
  query: string
  submittedQuery: string
  repositories: Repository[]
  totalCount: number
  page: number
  totalPages: number
  loading: boolean
  error: string
  filters: SearchFilterValues
  hasSearched: boolean
  setQuery: (value: string) => void
  setFilters: (
    filters: SearchFilterValues,
  ) => void
  search: (
    value?: string,
    nextPage?: number,
    nextFilters?: SearchFilterValues,
  ) => Promise<void>
  goToPage: (nextPage: number) => void
  retry: () => Promise<void>
}

function useRepositorySearch(): UseRepositorySearchResult {
  const [query, setQuery] = useState('')

  const [submittedQuery, setSubmittedQuery] =
    useState('')

  const [filters, setFilters] =
    useState<SearchFilterValues>({
      user: '',
      language: '',
      topic: '',
      stars: '',
      forks: '',
    })

  const [repositories, setRepositories] =
    useState<Repository[]>([])

  const [totalCount, setTotalCount] = useState(0)

  const [page, setPage] = useState(1)

  const [loading, setLoading] = useState(false)

  const [error, setError] = useState('')

  const [hasSearched, setHasSearched] =
    useState(false)

  const totalPages = useMemo(() => {
    return Math.min(
      Math.ceil(totalCount / PER_PAGE),
      Math.ceil(
        MAX_SEARCH_RESULTS / PER_PAGE,
      ),
    )
  }, [totalCount])

  const search = useCallback(
    async (
      value = submittedQuery,
      nextPage = 1,
      nextFilters = filters,
    ) => {
      const trimmedQuery = value.trim()

      if (!trimmedQuery) {
        return
      }

      setLoading(true)
      setError('')

      try {
        const result =
          await searchRepositories(
            trimmedQuery,
            nextPage,
            PER_PAGE,
            nextFilters,
          )

        setRepositories(result.items)

        setTotalCount(result.total_count)

        setSubmittedQuery(trimmedQuery)

        setFilters(nextFilters)

        setPage(nextPage)

        setHasSearched(true)
      } catch (err) {
        if (
          err instanceof DOMException &&
          err.name === 'AbortError'
        ) {
          return
        }

        const message =
          err instanceof Error
            ? err.message
            : 'リポジトリを検索できませんでした。'

        setError(message)
      } finally {
        setLoading(false)
      }
    },
    [filters, submittedQuery],
  )

  const goToPage = useCallback(
    (nextPage: number) => {
      if (
        nextPage < 1 ||
        nextPage > totalPages ||
        nextPage === page ||
        loading
      ) {
        return
      }

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })

      void search(
        submittedQuery,
        nextPage,
        filters,
      )
    },
    [
      filters,
      loading,
      page,
      search,
      submittedQuery,
      totalPages,
    ],
  )

  const retry = useCallback(async () => {
    await search(
      submittedQuery,
      page,
      filters,
    )
  }, [
    filters,
    page,
    search,
    submittedQuery,
  ])

  return {
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
    setQuery,
    setFilters,
    search,
    goToPage,
    retry,
  }
}

export default useRepositorySearch