import { BookOpen } from 'lucide-react'

type EmptyStateProps = {
  query: string
}

function EmptyState({ query }: EmptyStateProps) {
  return (
    <div className="rounded-2xl border border-dashed border-zinc-300 bg-white px-6 py-16 text-center">
      <div className="mx-auto grid size-12 place-items-center rounded-full bg-zinc-100 text-zinc-500">
        <BookOpen
          size={22}
          aria-hidden="true"
        />
      </div>

      <h2 className="mt-4 text-lg font-bold text-zinc-950">
        No repositories found
      </h2>

      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-zinc-500">
        We couldn't find any repositories matching
        <span className="font-medium text-zinc-700">
          {' '}
          "{query}"
        </span>
        .
      </p>
    </div>
  )
}

export default EmptyState