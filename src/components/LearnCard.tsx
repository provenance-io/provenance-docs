import Button from '@site/src/components/Button'

type LearnCardProps = {
  description: string
  link?: string
  tag: string
  title: string
}

export default function LearnCard({
  description,
  link,
  tag,
  title,
}: LearnCardProps) {
  return (
    <div className="flex flex-col justify-between gap-8 rounded-3xl border border-solid border-grey-500 bg-white p-8 xl:p-12">
      <div className="space-y-2.5">
        <span className="text-sm font-semibold text-blue-700">{tag}</span>
        <h3 className="font-MaisonNeueExtended text-xl font-semibold text-black">
          {title}
        </h3>
        <p className="text-black/60">{description}</p>
      </div>
      <Button linkTo={link} showArrow>
        Read More
      </Button>
    </div>
  )
}
