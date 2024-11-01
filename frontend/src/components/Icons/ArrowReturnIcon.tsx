import React from 'react'

export const ArrowReturnIcon: React.FC = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M5.828 7l2.536 2.536L6.95 10.95 2 6l4.95-4.95 1.414 1.414L5.828 5H13a8 8 0 110 16H4v-2h9a6 6 0 100-12H5.828z" />
    </svg>
  )
}
