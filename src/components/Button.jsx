import React from 'react'

function Button ({ label = 'Open Modal', background = 'bg-indigo-600', text = 'text-white' }) {
  return (
    <button className={`px-4 py-2 ${background} ${text} rounded-md transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}>
      {label}
    </button>
  )
}

export default Button
