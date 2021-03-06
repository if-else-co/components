import React from 'react'

export default ({ primaryColor = '#A5B3BB', secondaryColor = '#0D2B3E' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g>
      <path fill={primaryColor} d="M3.66 17.52a10 10 0 1 1 16.68 0C19.48 16.02 17.86 16 16 16H8c-1.86 0-3.48.01-4.34 1.52z"/>
      <path fill={secondaryColor} d="M3.66 17.52A5 5 0 0 1 8 15h8a5 5 0 0 1 4.34 2.52 10 10 0 0 1-16.68 0zM12 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
    </g>
  </svg>
)