import {
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

import Button from '../atoms/Button'

type PaginationProps = {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
}

type PageItem = number | 'ellipsis'

function getPageItems(
  page: number,
  totalPages: number,
): PageItem[] {
  if (totalPages <= 7) {
    return Array.from(
      { length: totalPages },
      (_, index) => index + 1,
    )
  }

  if (page <= 4) {
    return [
      1,
      2,
      3,
      4,
      5,
      'ellipsis',
      totalPages,
    ]
  }

  if (page >= totalPages - 3) {
    return [
      1,
      'ellipsis',
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ]
  }

  return [
    1,
    'ellipsis',
    page - 1,
    page,
    page + 1,
    'ellipsis',
    totalPages,
  ]
}

function Pagination({
  page,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) {
    return null
  }

  const pageItems = getPageItems(
    page,
    totalPages,
  )

  return (
    <nav
      aria-label="Pagination"
      className="mt-10 flex items-center justify-center"
    >
      <div className="flex items-center gap-1.5">
        <Button
          type="button"
          variant="secondary"
          size="sm"
          disabled={page === 1}
          onClick={() => onPageChange(page - 1)}
          aria-label="Go to previous page"
          className="gap-1"
        >
          <ChevronLeft
            size={16}
            aria-hidden="true"
          />

          <span className="hidden sm:inline">
            Previous
          </span>
        </Button>

        <div className="flex items-center gap-1">
          {pageItems.map((item, index) => {
            if (item === 'ellipsis') {
              return (
                <span
                  key={`ellipsis-${index}`}
                  aria-hidden="true"
                  className="flex h-10 w-6 items-center justify-center text-sm text-zinc-400"
                >
                  …
                </span>
              )
            }

            const isCurrentPage = item === page

            return (
              <Button
                key={item}
                type="button"
                variant={
                  isCurrentPage
                    ? 'primary'
                    : 'secondary'
                }
                aria-current={
                  isCurrentPage
                    ? 'page'
                    : undefined
                }
                aria-label={`Go to page ${item}`}
                onClick={() => onPageChange(item)}
                className={[
                  'h-10 min-w-10 px-3',
                  isCurrentPage
                    ? 'font-bold'
                    : 'font-medium',
                ].join(' ')}
              >
                {item}
              </Button>
            )
          })}
        </div>

        <Button
          type="button"
          variant="secondary"
          size="sm"
          disabled={page === totalPages}
          onClick={() => onPageChange(page + 1)}
          aria-label="Go to next page"
          className="gap-1"
        >
          <span className="hidden sm:inline">
            Next
          </span>

          <ChevronRight
            size={16}
            aria-hidden="true"
          />
        </Button>
      </div>
    </nav>
  )
}

export default Pagination