import React from 'react'
import Table from '../components/Table'
import Modal from '../components/Modal'

function ItemsPage () {
  return (
    <div>
      <h1 className='text-3xl font-bold tracking-tight text-gray-900'>Items</h1>
      <section className='mx-auto'>
        <article className='mt-7'>
          <Modal label='Nuevo item' background='bg-green-600' />
        </article>
        <article className='mt-5'>
          <Table />
        </article>
      </section>
    </div>
  )
}

export default ItemsPage
