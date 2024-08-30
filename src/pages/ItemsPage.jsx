import React from 'react'
import Table from '../components/Table'

function ItemsPage () {
  return (
    <div>
      <h1 className='text-3xl font-bold tracking-tight text-gray-900'>Items</h1>
      <section className='mx-auto my-7 py-7'>
        <Table />
      </section>
    </div>
  )
}

export default ItemsPage
