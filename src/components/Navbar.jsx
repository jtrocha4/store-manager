import React from 'react'

export default function Navbar() {
  return (
    <nav className='bg-white grid grid-cols-3 py-4 px-4 border-b-2'>
      <div className='flex justify-start'>
        <a href="">
          <span>Store Manager</span>
        </a>
      </div>
      <div className='flex justify-center gap-4'>
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Items</a>
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Usuarios</a>
      </div>
      <div className='flex justify-end'>
        <span>Cuenta</span>
      </div>
    </nav>
  )
}
