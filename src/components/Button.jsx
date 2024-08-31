import React from 'react'

function Button ({ label, background, shadow, hover }) {
  return (
    // <button className='middle none center mr-4 rounded-lg bg-green-500 py-3 px-6 font-sans text-xs font-bold text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'>
    //   {label}
    // </button>
    <button className={`middle none center mr-4 rounded-lg ${background} py-3 px-6 font-sans text-xs font-bold text-white shadow-md ${shadow} transition-all hover:shadow-lg ${hover} focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}>
      {label}
    </button>
  )
}

export default Button
