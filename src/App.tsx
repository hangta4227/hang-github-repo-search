import SearchPage from './components/templates/SearchPage'
import useRepositorySearch from './hooks/useRepositorySearch'

function App() {
  const repositorySearch =
    useRepositorySearch()

  function handleSearch(value: string) {
    void repositorySearch.search(
      value,
      1,
      repositorySearch.filters,
    )
  }

  function handleFiltersChange(
    filters: typeof repositorySearch.filters,
  ) {
    repositorySearch.setFilters(filters)
  }

  function handleClearFilters() {
    repositorySearch.setFilters({
      user: '',
      language: '',
      topic: '',
      stars: '',
      forks: '',
    })
  }

  return (
    <SearchPage
      query={repositorySearch.query}
      submittedQuery={
        repositorySearch.submittedQuery
      }
      repositories={
        repositorySearch.repositories
      }
      totalCount={
        repositorySearch.totalCount
      }
      page={repositorySearch.page}
      totalPages={
        repositorySearch.totalPages
      }
      loading={repositorySearch.loading}
      error={repositorySearch.error}
      filters={repositorySearch.filters}
      hasSearched={repositorySearch.hasSearched}
      onQueryChange={
        repositorySearch.setQuery
      }
      onSearch={handleSearch}
      onPageChange={
        repositorySearch.goToPage
      }
      onRetry={repositorySearch.retry}
      onFiltersChange={
        handleFiltersChange
      }
      onClearFilters={
        handleClearFilters
      }
    />
  )
}

export default App