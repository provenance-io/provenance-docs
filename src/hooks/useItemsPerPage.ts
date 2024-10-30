import { useMediaQuery } from '@uidotdev/usehooks'
import { useEffect, useState } from 'react'

export default function useItemsPerPage() {
  const [itemsPerPage, setItemsPerPage] = useState(1)
  const isSmallDevice = useMediaQuery('only screen and (max-width : 767px)')
  const isMediumDevice = useMediaQuery(
    'only screen and (min-width : 768px) and (max-width : 1023px)',
  )
  const isLargeDevice = useMediaQuery('only screen and (min-width : 1024px)')

  useEffect(() => {
    if (isSmallDevice) setItemsPerPage(1)
    if (isMediumDevice) setItemsPerPage(2)
    if (isLargeDevice) setItemsPerPage(3)
  }, [isSmallDevice, isMediumDevice, isLargeDevice])

  return itemsPerPage
}
