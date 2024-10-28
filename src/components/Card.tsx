import clsx from 'clsx'
import Link from '@docusaurus/Link'

type CardProps = {
  Icon?: any
  title: string
  link?: string
  children?: React.ReactNode
  smallSpacing?: boolean
}

export default function Card({
  Icon,
  title,
  link,
  children,
  smallSpacing = false,
}: CardProps) {
  return (
    <div className="rounded-3xl border border-solid border-grey-500 bg-white p-12 lg:p-8 xl:p-12">
      {Icon && <Icon />}
      <h2
        className={clsx('font-MaisonNeueExtended text-xl font-bold', {
          'mb-8': !smallSpacing,
          'mb-4': smallSpacing,
        })}
      >
        {link ? (
          <Link
            to={link}
            className="items-top hover:text-inherit flex justify-between no-underline"
          >
            <span>{title}</span>
            <span>&gt;</span>
          </Link>
        ) : (
          title
        )}
      </h2>
      {children && <p className="text-gray-600">{children}</p>}
    </div>
  )
}
