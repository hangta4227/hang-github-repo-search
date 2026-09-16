import type {
  ButtonHTMLAttributes,
  ReactNode,
} from 'react'

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'warn'

type ButtonSize =
  | 'sm'
  | 'md'
  | 'square'

type ButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode
    variant?: ButtonVariant
    size?: ButtonSize
  }

const variants: Record<
  ButtonVariant,
  string
> = {
  primary:
    'bg-zinc-950 text-white hover:bg-zinc-800',
  secondary:
    'border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50',
  ghost:
    'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950',
  warn:
    'text-white bg-red-300 hover:bg-red-100'
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-3 py-2',
  md: 'px-5 py-2.5',
  square: 'size-10 px-0 py-0',
}

function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        'inline-flex items-center justify-center rounded-xl',
        'text-sm font-semibold',
        'transition',
        'disabled:cursor-not-allowed disabled:opacity-40',
        variants[variant],
        sizes[size],
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button