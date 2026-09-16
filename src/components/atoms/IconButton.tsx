import type { ButtonHTMLAttributes, ReactNode } from 'react'

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  label: string
}

function IconButton({
  children,
  label,
  className = '',
  ...props
}: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      className={[
        'grid size-10 place-items-center rounded-xl',
        'border border-zinc-200 bg-white',
        'text-zinc-600 transition',
        'hover:bg-zinc-50 hover:text-zinc-950',
        'disabled:cursor-not-allowed disabled:opacity-40',
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}

export default IconButton