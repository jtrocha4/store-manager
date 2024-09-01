import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

function Table () {
  const items = [{
    id: '1',
    descripcion: 'Camiseta oversize marfil ilustración',
    categoria: 'Camiseta',
    genero: 'Hombre',
    color: 'Mafil',
    fit: 'Oversized',
    unidades: '120',
    precio: '$99.000'
  }, {
    id: '2',
    descripcion: 'Polo Verde Básico',
    categoria: 'Polo',
    genero: 'Hombre',
    color: 'Verde',
    fit: 'Regular',
    unidades: '60',
    precio: '$120.000'
  }]

  // console.log(items)

  return (
    <table className='table-auto w-full h-full my-0 align-middle text-dark border-neutral-200'>
      <thead className='align-bottom border-b-2 border-gray-500'>
        <tr className='font-semibold text-[0.95rem] text-gray-500'>
          <th className='pb-3 w-1/4 text-start'>Descripcion</th>
          <th className='pb-3 text-end'>Categoria</th>
          <th className='pb-3 text-end'>Genero</th>
          <th className='pb-3 text-end'>Color</th>
          <th className='pb-3 text-end'>Fit</th>
          <th className='pb-3 text-end'>Unidades</th>
          <th className='pb-3 text-end'>Precio</th>
          <th className='pb-3 w- text-center'>Acciones</th>
        </tr>
      </thead>
      <tbody className='border-b border-dashed last:border-b-0'>
        {
          items.map(it => (
            <tr key={it.id} className='border-b border-dashed last:border-b-0'>
              <td className='p-3 pl-0'>
                <Link className='mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary'>
                  {it.descripcion}
                </Link>
              </td>
              <td className='p-3 pr-0 text-end'>
                <span className='font-semibold text-light-inverse text-md/normal'>
                  {it.categoria}
                </span>
              </td>
              <td className='p-3 pr-0 text-end'>
                <span className='font-semibold text-light-inverse text-md/normal'>
                  {it.genero}
                </span>
              </td>
              <td className='p-3 pr-0 text-end'>
                <span className='font-semibold text-light-inverse text-md/normal'>
                  {it.color}
                </span>
              </td>
              <td className='p-3 pr-0 text-end'>
                <span className='font-semibold text-light-inverse text-md/normal'>
                  {it.fit}
                </span>
              </td>
              <td className='p-3 pr-0 text-end'>
                <span className='font-semibold text-light-inverse text-md/normal'>
                  {it.unidades}
                </span>
              </td>
              <td className='p-3 pr-0 text-end'>
                <span className='font-semibold text-light-inverse text-md/normal'>
                  {it.precio}
                </span>
              </td>
              <td className='p-3 pr-0'>
                <ul className='flex gap-2 p-3 pr-0 items-center justify-center'>
                  <li>
                    <Button label='Editar' background='bg-blue-600' />
                  </li>
                  <li>
                    <Button label='Eliminar' background='bg-red-600' />
                  </li>
                </ul>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default Table
