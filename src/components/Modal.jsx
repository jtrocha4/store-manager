import React, { useState } from 'react'

function Modal ({ label = 'Open Modal', background = 'bg-indigo-600', text = 'text-white' }) {
  const [openModal, setOpenModal] = useState(false)
  console.log(openModal)

  return (
    <div>
      {/* Open modal Button */}
      <button onClick={() => setOpenModal(!openModal)} className={`px-4 py-2 ${background} ${text} rounded-md transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}>{label}</button>
      {/* <-- Modal --> */}
      <div className={(openModal === true) ? 'fixed inset-0 px-2 z-10 overflow-hidden flex items-center justify-center' : 'fixed inset-0 px-2 z-10 overflow-hidden flex items-center justify-center pointer-events-none opacity-0'}>
        {/* Background Overlay */}
        <div className='absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        {/* Modal Content */}
        <div className='bg-white rounded-md shadow-xl overflow-hidden max-w-md w-full sm:w-96 md:w-1/2 lg:w-2/3 xl:w-1/3 z-50 relative'>
          {/* <-- Modal Header --> */}
          <div className='bg-indigo-500 text-white px-4 py-2 flex justify-between'>
            <h2 className='text-lg font-semibold'>Crear nuevo item</h2>
          </div>
          {/* <-- Modal Body --> */}
          <div className='p-4 max-h-96 overflow-y-auto'>
            <form action=''>
              <div class='mb-4'>
                <label for='descripcion' class='block font-medium text-gray-700 dark:text-gray-300 mb-2'>Descripcion</label>
                <input type='text' id='descripcion' class='shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500' placeholder='Polo Verde Básico' required />
              </div>
              <div class='mb-4'>
                <label for='categoria' class='block font-medium text-gray-700 dark:text-gray-300 mb-2'>Categoria</label>
                <input type='text' id='categoria' class='shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500' placeholder='Polo' required />
              </div>
              <div class='mb-4'>
                <label for='genero' class='block font-medium text-gray-700 dark:text-gray-300 mb-2'>Genero</label>
                <input type='text' id='genero' class='shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500' placeholder='Hombre' required />
              </div>
              <div class='mb-4'>
                <label for='color' class='block font-medium text-gray-700 dark:text-gray-300 mb-2'>Color</label>
                <input type='text' id='color' class='shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500' placeholder='Verde' required />
              </div>
              <div class='mb-4'>
                <label for='fit' class='block font-medium text-gray-700 dark:text-gray-300 mb-2'>Fit</label>
                <select name='' id='' className='shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'>
                  <option value='none' disabled selected>Seleccionar</option>
                  <option value='regular'>Regular</option>
                  <option value='fit'>Fit</option>
                  <option value='oversized'>Oversized</option>
                </select>
              </div>
              <div class='mb-4'>
                <label for='unidad' class='block font-medium text-gray-700 dark:text-gray-300 mb-2'>Unidad</label>
                <input type='text' id='unidad' class='shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500' placeholder='0' required />
              </div>
              <div class='mb-4'>
                <label for='precio' class='block font-medium text-gray-700 dark:text-gray-300 mb-2'>Precio</label>
                <input type='text' id='precio' class='shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500' placeholder='0' required />
              </div>
            </form>
          </div>
          {/* <-- Modal Footer --> */}
          <div className='border-t px-4 py-2 flex gap-2 justify-end'>
            <button onClick={() => setOpenModal(!openModal)} className='px-3 py-1 bg-gray-400 text-white  rounded-md w-full sm:w-auto'>Cancelar</button>
            <button onClick={() => setOpenModal(!openModal)} className='px-3 py-1 bg-indigo-500 text-white  rounded-md w-full sm:w-auto'>Guardar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
