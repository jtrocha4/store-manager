import React from 'react'
import { Link } from 'react-router-dom'

function Table () {
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
        <tr>
          <td className='p-3 pl-0'>
            <Link className='mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary'>
              Camiseta Oversize Marfil Ilustración
            </Link>
          </td>
          <td className='p-3 pr-0 text-end'>
            <span className='font-semibold text-light-inverse text-md/normal'>
              Camiseta
            </span>
          </td>
          <td className='p-3 pr-0 text-end'>
            <span className='font-semibold text-light-inverse text-md/normal'>
              Hombre
            </span>
          </td>
          <td className='p-3 pr-0 text-end'>
            <span className='font-semibold text-light-inverse text-md/normal'>
              Marfil
            </span>
          </td>
          <td className='p-3 pr-0 text-end'>
            <span className='font-semibold text-light-inverse text-md/normal'>
              Oversized
            </span>
          </td>
          <td className='p-3 pr-0 text-end'>
            <span className='font-semibold text-light-inverse text-md/normal'>
              120
            </span>
          </td>
          <td className='p-3 pr-0 text-end'>
            <span className='font-semibold text-light-inverse text-md/normal'>
              $109.000
            </span>
          </td>
          <td className='p-3 pr-0'>
            <ul className='flex gap-3 p-3 pr-0 items-center justify-center'>
              <li className='font-semibold text-light-inverse text-md/normal'>Editar</li>
              <li className='font-semibold text-light-inverse text-md/normal'>Eliminar</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table
