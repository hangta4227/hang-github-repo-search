import type { HTMLAttributes } from 'react'

type SkeletonProps = HTMLAttributes<HTMLDivElement>

function Skeleton({
  className = '',
  ...props
}: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={[
        'animate-pulse rounded bg-zinc-200',
        className,
      ].join(' ')}
      {...props}
    />
  )
}

export default Skeleton