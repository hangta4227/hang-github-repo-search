import type { SearchResponse } from '../types/repository'
import type { SearchFilterValues } from '../types/search'

const API_URL =
  'https://api.github.com/search/repositories'


export async function searchRepositories(
  query: string,
  page = 1,
  perPage = 12,
  filters: SearchFilterValues,
): Promise<SearchResponse> {
  const searchParts = [query.trim()]
  if (filters.user?.trim()) {
    searchParts.push(
      `user:${filters.user.trim()}`
    )
  }
  if (filters.language?.trim()) {
    searchParts.push(
      `language:${filters.language.trim()}`
    )
  }
  if (filters.topic?.trim()) {
    searchParts.push(
      `topic:${filters.topic.trim()}`
    )
  }
  if (filters.stars?.trim()) {
    searchParts.push(
      `stars:${filters.stars.trim()}`
    )
  }
  if (filters.forks?.trim()) {
    searchParts.push(
      `forks:${filters.forks.trim()}`
    )
  }
  const params = new URLSearchParams({
    q: query,
    page: String(page),
    per_page: String(perPage),
  })

  const response = await fetch(
    `${API_URL}?${params.toString()}`,
    {
      headers: {
        Accept:
          'application/vnd.github+json',
      },
    },
  )

  if (!response.ok) {
    if (response.status === 403) {
      throw new Error(
        'GitHub API rate limit exceeded. Please try again later.',
      )
    }

    if (response.status === 422) {
      throw new Error(
        'GitHub could not process this search.',
      )
    }

    if (response.status >= 500) {
      throw new Error(
        'GitHub is temporarily unavailable. Please try again later.',
      )
    }

    throw new Error(
      `GitHub API request failed (${response.status}).`,
    )
  }

  const data =
    (await response.json()) as SearchResponse

  return data
}