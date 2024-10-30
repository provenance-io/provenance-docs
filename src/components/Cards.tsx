import clsx from 'clsx'

export default function Cards({ className = '', children, maxCols = 3 }) {
  return (
    <div
      className={clsx(
        'grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-4 xl:gap-8',
        {
          'lg:grid-cols-2': maxCols === 2,
          'lg:grid-cols-3': maxCols === 3,
        },
        className,
      )}
    >
      {children}
    </div>
  )
}
