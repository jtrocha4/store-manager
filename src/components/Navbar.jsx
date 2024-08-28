import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar () {
  return (
    <nav className='bg-white grid grid-cols-3 py-4 px-4 border-b-2'>
      <div className='flex justify-start'>
        <Link to='/'>
          <span>Store Manager</span>
        </Link>
      </div>
      <div className='flex justify-center gap-4'>
        <Link to='/items' className='text-sm font-semibold leading-6 text-gray-900'>Items</Link>
        <Link to='/users' className='text-sm font-semibold leading-6 text-gray-900'>Usuarios</Link>
      </div>
      <div className='flex justify-end'>
        <span>Cuenta</span>
      </div>
    </nav>
  )
}
