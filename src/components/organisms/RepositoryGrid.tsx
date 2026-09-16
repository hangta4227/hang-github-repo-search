import RepositoryCard from './RepositoryCard'
import type { Repository } from '../../types/repository'

type RepositoryGridProps = {
  repositories: Repository[]
}

function RepositoryGrid({
  repositories,
}: RepositoryGridProps) {
  return (
    <div
      className={[
        'grid gap-4',
        'sm:grid-cols-2',
        'lg:grid-cols-3',
      ].join(' ')}
    >
      {repositories.map((repository) => (
        <RepositoryCard
          key={repository.id}
          repository={repository}
        />
      ))}
    </div>
  )
}

export default RepositoryGrid