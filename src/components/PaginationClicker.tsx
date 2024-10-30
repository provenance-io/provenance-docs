import clsx from 'clsx'
import React from 'react'

const Clicker = ({
  side = 'right',
  onClick,
}: {
  side?: 'left' | 'right'
  onClick: () => void
}) => (
  <div
    onClick={onClick}
    className={clsx(
      `cursor-pointer rounded-[33px] border border-gray-900 px-7 py-0 text-[32px] font-bold text-gray-900`,
    )}
  >
    {side === 'left' ? '<' : '>'}
  </div>
)

export default function PaginationClicker({
  currentNumber,
  setCurrentNumber,
  totalItems,
}: {
  currentNumber: number
  totalItems: number
  setCurrentNumber: React.Dispatch<React.SetStateAction<number>>
}) {
  // Create an array of the numbers to display
  let numArray: number[] = []
  // If less than 4, just show the number of total items
  if (totalItems <= 4) {
    for (let i = 1; i <= totalItems; i++) {
      numArray.push(i)
    }
  }
  // If greater than 4, only show 4 at a time
  else if (currentNumber === 1) {
    numArray = [currentNumber, 2, 3, 4]
  } else if (currentNumber <= totalItems - 2) {
    numArray = [
      currentNumber - 1,
      currentNumber,
      currentNumber + 1,
      currentNumber + 2,
    ]
  } else if (currentNumber == totalItems - 1) {
    numArray = [
      currentNumber - 2,
      currentNumber - 1,
      currentNumber,
      currentNumber + 1,
    ]
  } else if (currentNumber == totalItems) {
    numArray = [
      currentNumber - 3,
      currentNumber - 2,
      currentNumber - 1,
      currentNumber,
    ]
  }
  return (
    <div className="flex items-center justify-center">
      <Clicker
        side="left"
        onClick={() =>
          setCurrentNumber(
            currentNumber === 1 ? currentNumber : currentNumber - 1,
          )
        }
      />
      {numArray.map(num => (
        <div
          key={num}
          className={clsx(
            `cursor-pointer px-5`,
            { 'font-bold text-gray-900': currentNumber === num },
            { 'font-normal text-gray-700': currentNumber !== num },
          )}
          onClick={() => setCurrentNumber(num)}
        >
          {num}
        </div>
      ))}
      <Clicker
        side="right"
        onClick={() =>
          setCurrentNumber(
            currentNumber === totalItems ? totalItems : currentNumber + 1,
          )
        }
      />
    </div>
  )
}
