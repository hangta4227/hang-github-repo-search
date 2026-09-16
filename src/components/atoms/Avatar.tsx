import type { ImgHTMLAttributes } from 'react'

type AvatarProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string
  alt?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: 'h-5 w-5',
  md: 'h-8 w-8',
  lg: 'h-10 w-10',
}

function Avatar({
  src,
  alt = '',
  size = 'sm',
  className = '',
  ...props
}: AvatarProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={[
        sizes[size],
        'block shrink-0 rounded-full object-cover',
        className,
      ].join(' ')}
      {...props}
    />
  )
}

export default Avatar