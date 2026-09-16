import Skeleton from '../atoms/Skeleton'

const SKELETON_COUNT = 12

function LoadingCard() {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5">
      <div className="flex items-center gap-3">
        <Skeleton className="size-8 rounded-full" />
        <Skeleton className="h-4 w-24" />
      </div>

      <div className="mt-5 space-y-3">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-2/3" />
      </div>

      <div className="mt-5 flex gap-3">
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-4 w-12" />
        <Skeleton className="h-4 w-12" />
      </div>
    </div>
  )
}

function LoadingGrid() {
  return (
    <div
      aria-label="Loading repositories"
      aria-busy="true"
      className={[
        'grid gap-4',
        'sm:grid-cols-2',
        'lg:grid-cols-3',
      ].join(' ')}
    >
      {Array.from(
        { length: SKELETON_COUNT },
        (_, index) => (
          <LoadingCard key={index} />
        ),
      )}
    </div>
  )
}

export default LoadingGrid