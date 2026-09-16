export type RepositoryOwner = {
  login: string
  avatar_url: string
}

export type Repository = {
  id: number
  name: string
  full_name: string
  html_url: string
  description: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  owner: RepositoryOwner
}

export type SearchResponse = {
  total_count: number
  incomplete_results: boolean
  items: Repository[]
}