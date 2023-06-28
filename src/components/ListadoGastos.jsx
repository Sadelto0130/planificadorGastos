/* eslint-disable react/prop-types */
import React from 'react'
import Gasto from './Gasto'

// eslint-disable-next-line react/prop-types
const ListadoGastos = ({gastos, setGastoEditar, eliminarGasto}) => {
  return (
    <div className='listado-gastos contenedor'>
      <h2>{gastos.length ? 'Gastos' : 'No Hay Gastos Aún'}</h2>

      {gastos.map( gasto => (
        <Gasto  
          key={gasto.id}
          gasto={gasto}
          setGastoEditar={setGastoEditar}
          eliminarGasto={eliminarGasto}
        />
      ))}
    </div>
  )
}

export default ListadoGastos