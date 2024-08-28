import React from 'react'

function ItemsPage () {
  return (
    <div>
      <h1 className='text-3xl font-bold tracking-tight text-gray-900'>Items</h1>
      <section className='bg-slate-100 mx-auto py-7'>
        <table className='table-auto border border-green-800'>
          <thead>
            <tr>
              <th className='border border-green-600'>ID</th>
              <th className='border border-green-600'>Categoria</th>
              <th className='border border-green-600'>Descripcion</th>
              <th className='border border-green-600'>Genero</th>
              <th className='border border-green-600'>Color</th>
              <th className='border border-green-600'>Tallas</th>
              <th className='border border-green-600'>Fit</th>
              <th className='border border-green-600'>Unidades</th>
              <th className='border border-green-600'>Precio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Camiseta</td>
              <td>Camiseta Oversize Marfil Ilustración</td>
              <td>Hombre</td>
              <td>Marfil</td>
              <td>S-M-L-XL</td>
              <td>Oversized</td>
              <td>120</td>
              <td>$109.000</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default ItemsPage
