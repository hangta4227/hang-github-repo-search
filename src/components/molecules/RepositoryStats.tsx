import { GitFork, Star } from 'lucide-react'

import Badge from '../atoms/Badge'

type RepositoryStatsProps = {
  language?: string | null
  stars: number
  forks: number
}

function formatNumber(value: number) {
  return new Intl.NumberFormat('en', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(value)
}

function RepositoryStats({
  language,
  stars,
  forks,
}: RepositoryStatsProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-zinc-500">
      {language && <Badge>{language}</Badge>}

      <span className="inline-flex items-center gap-1">
        <Star
          size={14}
          aria-hidden="true"
        />
        {formatNumber(stars)}
      </span>

      <span className="inline-flex items-center gap-1">
        <GitFork
          size={14}
          aria-hidden="true"
        />
        {formatNumber(forks)}
      </span>
    </div>
  )
}

export default RepositoryStats