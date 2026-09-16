import {
  ExternalLink,
  GitFork,
  Star,
} from 'lucide-react'

import Avatar from '../atoms/Avatar'
import Badge from '../atoms/Badge'
import type { Repository } from '../../types/repository'

type RepositoryCardProps = {
  repository: Repository
}

function formatNumber(value: number) {
  return new Intl.NumberFormat('en', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(value)
}

function RepositoryCard({
  repository,
}: RepositoryCardProps) {
  return (
    <article
      className={[
        'flex h-full flex-col rounded-2xl',
        'border border-zinc-200 bg-white p-5',
        'transition',
        'hover:-translate-y-0.5 hover:border-zinc-300',
        'hover:shadow-[0_12px_35px_-20px_rgba(0,0,0,.3)]',
      ].join(' ')}
    >
      <div className="flex items-start justify-between gap-4">
        <a
          href={repository.html_url}
          target="_blank"
          rel="noreferrer"
          className="min-w-0"
        >
          <div className="flex items-center gap-3">
            <Avatar
              src={repository.owner.avatar_url}
              alt={`${repository.owner.login} avatar`}
              size="md"
            />

            <span className="truncate text-sm font-medium text-zinc-500">
              {repository.owner.login}
            </span>
          </div>
        </a>

        <a
          href={repository.html_url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${repository.full_name} on GitHub`}
          className="shrink-0 text-zinc-400 transition hover:text-zinc-950"
        >
          <ExternalLink
            size={17}
            aria-hidden="true"
          />
        </a>
      </div>

      <div className="mt-5 flex-1">
        <a
          href={repository.html_url}
          target="_blank"
          rel="noreferrer"
          className="group"
        >
          <h2 className="line-clamp-1 text-base font-bold text-zinc-950 group-hover:underline">
            {repository.name}
          </h2>

          <p className="mt-2 line-clamp-3 min-h-[4.5rem] text-sm leading-6 text-zinc-500">
            {repository.description ||
              'No description provided.'}
          </p>
        </a>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
        {repository.language && (
          <Badge>{repository.language}</Badge>
        )}

        <span className="inline-flex items-center gap-1 text-xs text-zinc-500">
          <Star
            size={14}
            aria-hidden="true"
          />
          {formatNumber(repository.stargazers_count)}
        </span>

        <span className="inline-flex items-center gap-1 text-xs text-zinc-500">
          <GitFork
            size={14}
            aria-hidden="true"
          />
          {formatNumber(repository.forks_count)}
        </span>
      </div>
    </article>
  )
}

export default RepositoryCard