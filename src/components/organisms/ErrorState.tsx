import { AlertCircle } from 'lucide-react'

import Button from '../atoms/Button'

type ErrorStateProps = {
  message: string
  onRetry: () => void
}

function ErrorState({
  message,
  onRetry,
}: ErrorStateProps) {
  return (
    <div
      role="alert"
      className="rounded-2xl border border-red-200 bg-red-50 px-6 py-12 text-center"
    >
      <div className="mx-auto grid size-12 place-items-center rounded-full bg-red-100 text-red-600">
        <AlertCircle
          size={22}
          aria-hidden="true"
        />
      </div>

      <h2 className="mt-4 text-lg font-bold text-zinc-950">
        Something went wrong
      </h2>

      <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-zinc-600">
        {message}
      </p>

      <Button
        type="button"
        variant="secondary"
        onClick={onRetry}
        className="mt-5"
      >
        Try again
      </Button>
    </div>
  )
}

export default ErrorState