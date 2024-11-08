import React from 'react'

export const ChatIcon: React.FC = (props) => {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M14 1a1 1 0 011 1v8a1 1 0 01-1 1H4.414A2 2 0 003 11.586l-2 2V2a1 1 0 011-1h12zM2 0a2 2 0 00-2 2v12.793a.5.5 0 00.854.353l2.853-2.853A1 1 0 014.414 12H14a2 2 0 002-2V2a2 2 0 00-2-2H2z" />
      <path d="M3 3.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zM3 6a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 6zm0 2.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z" />
    </svg>
  )
}
