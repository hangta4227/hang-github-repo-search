import type { HTMLAttributes, ReactNode } from 'react'

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode
}

function Badge({
  children,
  className = '',
  ...props
}: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center rounded-full',
        'bg-zinc-100 px-2.5 py-1',
        'text-xs font-medium text-zinc-700',
        className,
      ].join(' ')}
      {...props}
    >{children}</span>
  )
}

export default Badge